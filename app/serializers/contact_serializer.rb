class ContactSerializer < ActiveModel::Serializer
	attributes :id, :user_id, :last_name, :first_name, :occupation, :employer, :email, :phone, :address_line_1, :address_line_2, :city, :state, :zip_code
end
