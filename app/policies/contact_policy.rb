class ContactPolicy < ApplicationPolicy

	def update?
		user.administrator? || record.user == user
	end

	def destroy?
		update?
	end

end