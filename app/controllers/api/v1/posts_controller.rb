module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: [:show, :edit, :update, :destroy]

      def index
        posts = Post.all
        render json: posts
      end

      def show
      end

      def new
        @post = Post.new
      end

      def create
        @post = Post.new(post_params)
        if @post.save 
          flash[:notice] = "Post was created successfully."
          redirect_to @article
        else
          render 'new'
        end
      end

      def edit 
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

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description, :status)
      end
    end
  end
end