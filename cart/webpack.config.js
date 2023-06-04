const HtmlWebpackPlugin= require("html-webpack-plugin");
const ModuleFederationPlugin=require("webpack/lib/container/ModuleFederationPlugin");

module.exports={
    mode:"development",
    devServer:{
        port:8082
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"cart",
            // remotes:{
            //     products:"products@http://localhost:8081/remoteEntry.js"
            // },
            filename:"remoteEntry.js",
            exposes:{
                "./CartShow":"./src/bootstrap.js"
            },
            shared:["faker"]
            // shared:{
            //     faker:{
            //         singleton:true,
            //     }
            // }
        }),
        // new HtmlWebpackPlugin({
        //     template:"./public/index.html"
        // })
    ]
}