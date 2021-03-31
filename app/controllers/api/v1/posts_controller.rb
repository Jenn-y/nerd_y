module Api
  module V1
    class PostsController < ApplicationController
      before_action :post, only: [:show, :update, :destroy]

      def index
        posts = Post.all.order("updated_at DESC")
        render json: posts
      end

      def show
        if post
          render json: post
        else
          render json: post.errors 
        end
      end

      def create
        post = Post.new(post_params)
        if post.save 
          render json: post
        else
          render json: post.errors
        end
      end

      def update
        if post.update(post_params)
          render json: post
        else
          render json: post.errors
        end
      end

      def destroy
        if post.destroy
          head :no_content
        else
          render json: post.errors
        end
      end

      private

      def post
        @post ||= Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description, :status, :main_image, :thumb_image)
      end
    end
  end
end