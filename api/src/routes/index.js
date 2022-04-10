const {Router}=require('express')
const {createBlogPost,getAllBlogPosts,modifyBlogPost}=require("../controllers")
const router=Router()
router.post("/", (req,res)=>{
    const date=new Date()

    res.status(200).json({
        response: `Api received your request at ${date}`
    })
})
router.post("/create",createBlogPost)
router.get("/list", getAllBlogPosts)
router.post("/update", modifyBlogPost)
module.exports= router;