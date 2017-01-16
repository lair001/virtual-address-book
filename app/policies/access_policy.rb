class AccessPolicy < Struct.new(:user, :access)

	def admin?
		user.administrator?
	end

	def app?
		user && !user.banned?
	end

end