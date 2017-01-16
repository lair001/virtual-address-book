class Contact < ApplicationRecord

	belongs_to :user

	validates :last_name, format: { with: name_regex }
	validates :first_name, format: { with: name_regex }
	validates :email, { uniqueness: true, length: { maximum: 50 }, format: { with: email_regex } }
	validates :phone, { format: { with: /\A(\(\d{3}\)\d{3}-\d{4}|)\z/ } }
	validates :address_line_1, { format: { with: address_line_regex } }
	validates :address_line_2, { format: { with: address_line_regex } }
	validates :city, { format: { with: /\A[\w .]{,25}\z/ } }
	validates :state, { format: { with: /\A([A-Z]{2}|)\z/ } }
	validates :zip_code, { format: { with: /\A(\d{5}-\d{4}|\d{5})\z/ }  }

	def name_regex
		/\A\w{,25}\z/
	end

	def address_line_regex
		/\A[\w .]{,50}\z/
	end

	def last_name=(last_name)
		write_attribute(:last_name, self.class.format_last_name(last_name))
	end

	def first_name=(first_name)
		write_attribute(:first_name, self.class.format_first_name(first_name))
	end

	def city=(city)
		write_attribute(:state, self.class.format_city(city))
	end

	def phone=(phone)
		write_attribute(:phone, self.class.format_phone(phone))
	end

	def address_line_1=(address_line)
		write_attribute(:address_line_1, self.format_address_line(address_line))
	end

	def address_line_2=(address_line)
		write_attribute(:address_line_2, self.format_address_line(address_line))
	end

	def state=(state)
		write_attribute(:state, self.class.format_state(state))
	end

	def self.format_last_name(last_name)
		trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(last_name.strip)).capitalize
	end

	def self.format_first_name(first_name)
		trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(first_name.strip)).capitalize
	end

	def self.format_phone(phone)
		trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(phone.strip)).split('').keep_if{ |char| char.match(/\d/) }.insert(6, '-').insert(3, ')').insert(0, '(').join('')
	end

	def self.format_city(city)
		trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(city.strip)).split(' ').collect{ |word| word.capitalize }.join(' ')
	end

	def self.format_state(state)
		trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(state.strip)).upcase
	end

	def self.format_address_line(address_line)
		trim_whitespace_in(convert_whitespace_that_is_not_spaces_to_spaces_in(address_line.strip)).split(' ').collect{ |word| word.capitalize }.join(' ')
	end

end
