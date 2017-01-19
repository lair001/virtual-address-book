class UserSerializer < ActiveModel::Serializer
	attributes :id, :username, :email, :role, :contacts

	def contacts
		object.contacts_by_ascending_last_name
	end

end
