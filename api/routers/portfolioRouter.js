const router = require("express").Router();
const { Intro, About, Project, Contact, Blog} = require("../models/portfolioModel");
const user  = require("../models/userModel");

// get all values from database
router.get("/get-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const blogs = await Blog.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      contact: contacts[0],
      blog: blogs,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//update Intro values in database
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ message: "Intro Section updated", data: intro, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//update About values in database 
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ message: "About Section updated", data: about, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//add Project values in database
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(
      req.body
    );
    await project.save();
    res
      .status(200)
      .send({ message: "Project added", data: project, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//update project values in database
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ message: "Project updated", data: project, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//delete project values in database
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete(
      { _id: req.body._id }
    );
    res
      .status(200)
      .send({ message: "Project deleted", data: project, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//update Contact values in database
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req
      .body,
      { new: true }
    );
    res
      .status(200)
      .send({ message: "Contact Section updated", data: contact, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//add Blog values in database
router.post("/add-blog", async (req, res) => {
  try {
    const blog = new Blog(
      req.body
    );
    await blog.save();
    res
      .status(200)
      .send({ message: "Blog added", data: blog, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//update Blog values in database
router.post("/update-blog", async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate
    ({ _id: req.body._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ message: "Blog updated", data: blog, success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
);

//delete Blog values in database
router.post("/delete-blog", async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete
    ({ _id: req.body._id }
    );
    res
      .status(200)
      .send({ message: "Blog deleted", data: blog, success: true });  
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
);

// admin login
router.post("/admin-login", async (req, res) => {
  try {
    const userLogin = await user.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    userLogin.password = '';
    if (userLogin) {
      res.status(200).send({ message: "Login successful", success: true, data: userLogin });
    } else {
      res.status(401).send({ message: "Invalid login credentials" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
