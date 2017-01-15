class RecordNotFoundSerializer < ActiveModel::Serializer
	attributes :errors

	def errors
		[{ status: 404, title: "Record not found." }]
	end
end
