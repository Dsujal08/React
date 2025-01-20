import conf from '../conf/conf';
import { Client,ID , Databases ,Storage , Query } from "appwrite";



export class Service {

    client = new Client();
    databases;
    bucket;

    constructor()
    {
        this.client 
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwritePROJECT_ID);
                this.databases = new Databases(this.client);
                this.bucket = new Storage(this.client);
    }
// Create a post
    async createPost ({tiltle, slug , content, featuredImage, status, userId})
    {
        try 
        {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                tiltle,
                content,
                featuredImage,
                status,
                userId
            }
            )    
        }
         catch (error) 
         {
           console.log(error);
           
        }
    }
// Updates a post
    async updatePost (slug, {tiltle,  content, featuredImage, status, userId})
    {
        try 
        {
           return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                tiltle,
                content,
                featuredImage,
                status,
            }
           )
            
        } catch (error) {
        console.log(error);
            
        }

    }
// delete a post
    async deletePost (slug, {tiltle,  content, featuredImage, status, userId})
    {
        try
        {
        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )    
        return ture
        } 
        catch (error)
        {
           console.log(error);
        }
        return false
    }
// Get all posts
async getPost (slug)
    {
        try 
        {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        }
        catch (error)
        {
            console.log(error);
                return false
        }
    }
// Get allPosts
    async getPosts(queries =[Query.equal("status","active")])
    {
        try 
        {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }
        catch (error)
        {
        console.log(error);
            return false;
        }
    }

// Upload a file Method
async uploadFile(file)
    {
        try 
        {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),  
                file
            )
        } 
        catch (error)
        {
            console.log(error); 
            return false;    
        }
    }

// Delete File
 async deleteFile(fileId)
    {
        try 
        {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            
        } 
        catch (error)
        {
            console.log(error);
            return false;
        }
    }

// Get File
    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service();  

export default Service 