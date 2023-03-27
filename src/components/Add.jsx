import React ,{useState} from 'react'
import axios from 'axios'
import swal from "sweetalert";
import { useNavigate} from "react-router-dom";
export default function Add() {
  const navigate = useNavigate();
const [datas, setDatas] = useState({
  name:'',
  qun:'',
  img:'',
})

const handleChange = (e) =>{
setDatas({...datas, [e.target.name]:e.target.value})
}
const handlePhoto = (e) =>{
setDatas({...datas, img:e.target.files[0]});


}
const handleSubmit = (e) =>{
e.preventDefault();
const formData = new FormData();
console.log(formData)
formData.append('name', datas.name);
formData.append('qun', datas.qun);
formData.append('img', datas.img);
console.log(datas.photo);
axios.post('http://localhost:8000/add', formData).then(res=>{

  if(res.status === 200){
    swal({
      title: "Success!",
      text: "Successgully Created!",
      icon: "success",
      button: "OK",
    });
    navigate("/stock");
  }else{
    swal({
      title: "Fails!",
      text: "Fails to Create!",
      icon: "error",
      button: "OK",
    });
    navigate("/add");
  }
}).catch(error=>{
  console.log(error);
});


}
  return (
    
        <>
      <section className="intro">
        <div className=" mb-5">
          <section className="h-100 ">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col">
                    <div className="card card-registration my-4">
                      <div className="row g-0">
                        <div className="col-xl-5 d-none d-xl-block">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="img-fluid"
                            style={{
                              borderTopLeftRadius: ".25rem",
                              borderBottomLeftRadius: ".25rem",
                              backgroundPosition: "center",
                              height: "22rem",
                            }}
                          />
                        </div>
                        <div className="col-xl-7 ">
                          <div className="card-body p-md-2 text-black">
                            <div id="grad">
                              <h3
                                className="flex logo "
                                id="grad"
                                style={{ justifyContent: "center" }}
                              >
                         ADD
                              </h3>
                            </div>

                            <div className="row mt-5">
                              <div className="col-md-12 mb-1">
                                <div className="form-outline">
                                  <input
                                    type="text"
                                    id="form3Example1m"
                                    className="form-control form-control-lg f"
                                    name="name"
                                    value={datas.name}
                                   onChange={handleChange}
                                    placeholder="Full Name"
                                  />
                                  <span className="label label-default" style={{fontSize:"11px", marginLeft:"10px"}}>Name</span>
                                </div>
                              </div>
                             
                            </div>
                            <div className="row mt-1">
                              <div className="col-md-12 mb-1">
                                <div className="form-outline">
                                  <input
                                    type="text"
                                    id="form3Example1m"
                                    className="form-control form-control-lg f"
                                    name="qun"
                                    placeholder="Quentity"
                                    value={datas.qun}
                                    onChange={handleChange}
                                   
                                  />
                                  <span className="label label-default" style={{fontSize:"11px", marginLeft:"10px"}}>Quantity</span>
                                </div>
                              </div>
                              
                            </div>
                            <div className="row mt-1">
                              <div className="col-md-12 mb-1">
                                <div className="form-outline">
                                  <input
                                    type="file"
                                    id="form3Example1m"
                                    className="form-control form-control-lg f"
                                    name="img"
                                    onChange={handlePhoto}
                                   accept=".png, .jpg, .jpeg"
                                  />
                                 
                                </div>
                              </div>
                              
                            </div>
                            

                            <button type="submit" className="button mt-1" value="edit">
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
    
  )
}


                          