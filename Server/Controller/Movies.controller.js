const Moviemodel = require("../Modal/Movies.mondal");

let createmovies = async (request, response) => {

    let { Title, Genre, Director, ReleaseYear, Description, Image } = request.body;
    if (!Title || !Genre || !Director || !ReleaseYear || !Description || !Image) {
        return response.status(400).json({
            message: "Please fill all the feilds"
        })
    }

    try {
        const Moviesdetails = await Moviemodel.create({ ...request.body, Userid: request.User._id })

        return response.status(201).json({
            message: "Movies was Created",
            Moviedata: Moviesdetails
        })

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }


}

let getmoviesuser = async (request, response) => {
    try {
        let allmovies = await Moviemodel.find();
        response.status(200).json({
            success: true,
            movies: allmovies
        });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: error.message
        });
    }
}

let deletemoviesuser = async (request, response) => {
    let {  moviesid } = request.params;

   

    try {
        let moviesdeleteresult;

        if (moviesid) {
            moviesdeleteresult = await Moviemodel.findByIdAndDelete(moviesid);
            if (!moviesdeleteresult) {
                return response.status(200).json({
                    message: "Data not found "
                });
            }
            return response.status(200).json({
                message: "One data delete succesfully"
            });

        } else {
            moviesdeleteresult = await Moviemodel.deleteMany({ Userid: userId });
            if (!moviesdeleteresult) {
                return response.status(200).json({
                    message: "Data not found "
                });
            }
            return response.status(200).json({
                message: "All movies deleted"
            });
        }

    } catch (error) {
        return response.status(400).json({
            message: error.message
        });
    }
}
let updatedate = async (request, response) => {
    let {  moviesid } = request.params;
    

    try {
        await Moviemodel.findByIdAndUpdate(moviesid, { $set: { ...request.body } });

        return response.status(200).json({
            message: "Update succesfully"
        })

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

}


module.exports = { createmovies, getmoviesuser, deletemoviesuser, updatedate };