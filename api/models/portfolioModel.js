const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcome: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  paragraph1: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
  skill: {
    type: Array,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  techstack: {
    type: Array,
    required: true,
  },
  gitLink: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const blogsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Project: mongoose.model("projects", projectsSchema),
  Contact: mongoose.model("contacts", contactSchema),
  Blog: mongoose.model("blogs", blogsSchema),
};
