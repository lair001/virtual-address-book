class Contact < ApplicationRecord

	belongs_to :user

	validates :last_name, { format: { with: contact_name_regex } }
	validates :first_name, { format: { with: contact_name_regex } }
	validates :occupation, { format: { with: occupation_regex } }
	validates :employer, { format: { with: employer_regex } }
	validates :email, { length: { maximum: 50 }, format: { with: email_regex } }
	validates :phone, { format: { with: /\A(\(\d{3}\)\d{3}-\d{4}|)\z/ } }
	validates :address_line_1, { format: { with: contact_address_line_regex } }
	validates :address_line_2, { format: { with: contact_address_line_regex } }
	validates :city, { format: { with: /\A[\w .]{,25}\z/ } }
	validates :state, { format: { with: /\A([A-Z]{2}|)\z/ } }
	validates :zip_code, { format: { with: /\A(\d{5}-\d{4}|\d{5}|)\z/ } }

	def last_name=(last_name)
		write_attribute(:last_name, self.class.format_last_name(last_name))
	end

	def first_name=(first_name)
		write_attribute(:first_name, self.class.format_first_name(first_name))
	end

	def occupation=(occupation)
		write_attribute(:occupation, self.class.format_occupation(occupation))
	end

	def employer=(employer)
		write_attribute(:employer, self.class.format_employer(employer))
	end

	def city=(city)
		write_attribute(:city, self.class.format_city(city))
	end

	def phone=(phone)
		write_attribute(:phone, self.class.format_phone(phone))
	end

	def address_line_1=(address_line)
		write_attribute(:address_line_1, self.class.format_address_line(address_line))
	end

	def address_line_2=(address_line)
		write_attribute(:address_line_2, self.class.format_address_line(address_line))
	end

	def state=(state)
		write_attribute(:state, self.class.format_state(state))
	end

	def self.format_last_name(last_name)
		strip_convert_whitespace_to_spaces_and_trim_whitespace_in(last_name).capitalize
	end

	def self.format_first_name(first_name)
		strip_convert_whitespace_to_spaces_and_trim_whitespace_in(first_name).capitalize
	end

	def self.format_occupation(occupation)
		format_city(occupation)
	end

	def self.format_employer(employer)
		strip_convert_whitespace_to_spaces_and_trim_whitespace_in(employer).split(' ').collect{ |word| word == word.upcase ? word : word.capitalize }.join(' ')
	end

	def self.format_phone(phone)
		phone.blank? ? "" : strip_convert_whitespace_to_spaces_and_trim_whitespace_in(phone).split('').keep_if{ |char| char.match(/\d/) }.insert(6, '-').insert(3, ')').insert(0, '(').join('')
	end

	def self.format_city(city)
		strip_convert_whitespace_to_spaces_and_trim_whitespace_in(city).split(' ').collect{ |word| word.capitalize }.join(' ')
	end

	def self.format_state(state)
		strip_convert_whitespace_to_spaces_and_trim_whitespace_in(state).upcase
	end

	def self.format_address_line(address_line)
		strip_convert_whitespace_to_spaces_and_trim_whitespace_in(address_line).split(' ').collect{ |word| word.capitalize }.join(' ')
	end

end
