const { pool } = require("../db");


const createBlogPost= async(req,res)=>{

const {title,description } =req.body;
  try {
    const response = await pool.query(
      "INSERT INTO blogs (title, description) VALUES ($1, $2)",
      [title,description]
    );
    res.json({response});
  } catch (error) {
    console.error(error)
    res.json(error)
  }
};


const getAllBlogPosts=async(req,res) => {
  try {
    const response = await pool.query("SELECT * FROM blogs");
    console.log(response.rows);
    res.json({res:response.rows})
  } catch (error) {
    console.error(error);
    res.json(error)
  }
} 

const modifyBlogPost=async (req,res)=>{
  const {id,title} = req.body;
  try {
    const response = await pool.query("UPDATE blogs SET title = $1 WHERE id = $2", [
      title,
      id,
    ]);
    res.json({res: response})
  } catch (error) {
    console.error(error);
    res.json(error)
  }
}

module.exports={createBlogPost,modifyBlogPost,getAllBlogPosts}