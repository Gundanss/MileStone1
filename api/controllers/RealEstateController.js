/**
 * RealEstateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // action - create The create means the when client side refer to create page, this function will be launched.
    create: async function (req, res) { //what is the meaning of create

        if (req.method == "GET")
            return res.view('estate/create');

        if (!req.body.RealEstate)
            return res.badRequest("Form-data not received.");

        await RealEstate.create(req.body.RealEstate); //?

        return res.ok("Successfully created!");
    },




};

