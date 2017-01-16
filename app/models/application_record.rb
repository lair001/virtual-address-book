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
		/\A[^@]+@[^@]+\.[^.@\d]+\z/
	end

end
