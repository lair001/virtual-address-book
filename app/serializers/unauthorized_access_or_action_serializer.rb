class UnauthorizedAccessOrActionSerializer < ActiveModel::Serializer
	attributes :errors

	def errors
		[{ status: 403, title: "Unauthorized access or action." }]
	end
end
