class ContactsController < JsonController

	def create
		@contact = Contact.new(contact_params)
		@contact.user = current_user
		if @contact.save
			render json: @contact
		else
			render json: @contact, status: 422, serializer: ModelErrorsSerializer
		end
	end

	def update
		@contact = Contact.find(params[:id])
		authorize(@contact)
		if @contact.update(contact_params)
			render json: @contact
		else
			render json: @contact, status: 422, serializer: ModelErrorsSerializer
		end
	end

	def destroy
		@contact = Contact.find(params[:id])
		authorize(@contact)
		@contact.destroy
		render json: {}, serializer: ResourceDestroyedSerializer
	end

private

	def contact_params
		params.require(:contact).permit(:user_id, :last_name, :first_name, :occupation, :employer, :email, :phone, :address_line_1, :address_line_2, :city, :state, :zip_code)
	end

end