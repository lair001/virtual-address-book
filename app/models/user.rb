class User < ApplicationRecord

	has_many :contacts

	has_secure_password

	before_create :generate_and_set_security_code

	validates :username, { uniqueness: true, length: { in: 2..50 } }
	validates :email, { uniqueness: true, length: { maximum: 50 }, format: { with: /\A[^@]+@[^@]+\.[^.@\d]+\z/ } }
	validates :security_code, { length: { is: 128 } }
	validates :password, { length: { minimum: 6 } }

	validate do
		absence_of_forbidden_characters_in :username
		absence_of_forbidden_characters_in :email
		absence_of_whitespace_in :email
		absence_of_forbidden_characters_in :password
		absence_of_whitespace_in :password
	end

	enum role: [:banned, :normal, :administrator, :moderator, :superuser]

	def username=(username)
		write_attribute(:username, self.class.format_username(username))
	end

	def email=(email)
		write_attribute(:email, self.class.format_email(email))
	end

	def generate_and_set_security_code
		self.security_code = SecureRandom.hex(64)
	end

	def self.format_username(username)
		 trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(username.strip))
	end

	def self.format_email(email)
		email.strip
	end

end
