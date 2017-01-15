class InvalidCredentialsSerializer < ActiveModel::Serializer
	attributes :errors

	def errors
		[{ status: 403, title: "Your credentials are invalid." }]
	end
end
