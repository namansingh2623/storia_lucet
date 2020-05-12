import axios from "axios";

const endPoint='http://localhost:3000';


const DimondRepo={
    prices:(shape,carat,color,clarity)=>{

    return new Promise((resolve,reject)=>{
      axios
        .post(endPoint+'/get-prices',data)
        .then(res=>{
          resolve(res);
        })
        .catch(err=>reject(err))
    })
}
};

export default DimondRepo;
