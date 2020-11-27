const Tags = require("../models/Tags")

function tagsService() {
  async function getTags() {
    return Tags.find({})
  }
  async function addTags(Title,id) {
    return Tags.create({title: Title, ID:id})
  }
  

  async function deleteTags(id) {
    return Tags.deleteOne({_id:id})
  }

  return {
    getTags,
    addTags,
    deleteTags
  }
}
module.exports=	TagsService;

