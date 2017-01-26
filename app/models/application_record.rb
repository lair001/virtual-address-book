class ApplicationRecord < ActiveRecord::Base
	self.abstract_class = true

	include Forbiddable::InstanceMethods
	extend Whitespaceable::ClassMethods

	def email=(email)
		write_attribute(:email, self.class.format_email(email))
	end

	def self.format_email(email)
		email.strip
	end

	def self.email_regex
		/\A([^@]+@[^@]+\.[^.@\d]+|)\z/
	end

	def self.contact_name_regex
		/\A\w{1,25}\z/
	end

	def self.occupation_regex
		/\A[\w .]{,25}\z/
	end

	def self.employer_regex
		/\A[\w .,-]{,50}\z/
	end

	def self.contact_address_line_regex
		/\A[\w .'#]{,50}\z/
	end

end
