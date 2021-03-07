


async function savePublication(req, res){
    const params = req.body;
      
    if(!params.text) return res.status(200).send({message: 'necesitas enviar texto'});
    
    const publication = Publication();
    publication.title = params.title.toLowerCase();
    publication.author = params.author;
    publication.text = params.text;
    publication.file = "null";
    publication.genre = params.genre;
    publication.language =params.language;
    publication.city = params.city;
    
    publication.created_at = moment().unix();
    

    publication.save((err, publicationSaved)=>{
        
        if(err){
            console.log(err)
            return res.status(500).send({message: 'Error al publicar la publication'})}
        if(!publicationSaved) return res.status(404).send({message: 'la publicacion no ha sido guardada'});
        publication.user.password = undefined;
        
        return res.status(200).send({publication: publicationSaved});
    })
}
