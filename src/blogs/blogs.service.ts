import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './blogs.schemas';
import mongoose, { Model } from 'mongoose';
import { PostDto, UpdatePostDto } from 'src/dtos/blogs.dtos';
import { User } from 'src/users/users.schema';


@Injectable()
export class BlogsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>
    ) {}

    async getAllPosts() {
        return this.postModel.find({})
    }

    async getOnePost(id: string) {
        return this.postModel.findById({ id })
    }

    async createPost(postDto: PostDto, user: User): Promise<Post> {
        const createdPost = new this.postModel({
            ...postDto,
            user: user._id
        });
        
        //createdPost.user = new mongoose.Schema.Types.ObjectId(userId)
        return createdPost.save()
    }

    async updatePost(id: string, updatePostDto: UpdatePostDto) {
        const updatedPost = this.postModel.findByIdAndUpdate(id, {...updatePostDto})
        return updatedPost;
    }

    async deletePost(id: string) {
        const deletedPost = this.postModel.findByIdAndDelete(id)
        return { msg: "Post is successfully deleted" }
    }
}
