class ResourceDestroyedSerializer < ActiveModel::Serializer
	attributes :message

	def message
		"Resource successfully destroyed."
	end
end
