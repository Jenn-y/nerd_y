module Api
  module V1
    class PostsController < ApplicationController
      before_action :post, only: [:show, :update, :destroy]

      def index
        posts = Post.all
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
        if @post.update(post_params)
          flash[:notice] = "Post was updated successfully."
          redirect_to @article
        else
          render 'edit'
        end
      end

      def destroy
        @post.destroy
        redirect_to posts_path
      end

      private

      def post
        @post ||= Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description, :status)
      end
    end
  end
end