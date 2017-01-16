class ModelErrorsSerializer < ActiveModel::Serializer

	attributes :errors

	def errors
		[{ status: 422, title: "Record not processed.", detail: object.errors.full_messages  }]
	end

end
