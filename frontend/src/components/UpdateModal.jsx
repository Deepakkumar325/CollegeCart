// import React, { useRef, useContext, useState } from 'react'
// import ProductState from '../context/products/ProductState';

// const UpdateModal = () => {

//     const context = useContext(ProductState)
//     const {  updateProduct } = context;

//     const ref = useRef(null);
//     const refClose = useRef(null)

//     const [product, setProduct] = useState({ id: "", Options: "", Amount: "" })

//     const EditProduct = (currentProduct) => {
//         ref.current.click()
//         setProduct({ id: currentProduct._id, Options: currentProduct.Options, Amount: currentProduct.Amount })
//     }

//     const onchange = (e) => {
//         setProduct({ ...product, [e.target.name]: e.target.value })
//     }

//     const handleClick = (e) => {
//         updateProduct(product.id, product.Options, product.Amount)
//         refClose.current.click()
//         // props.showAlert("Update Successfully", "success")
//         console.log("updated")
//     }

//     return (
//         <>
//             <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 Launch demo modal
//             </button>

//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Product Details</h1>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form className='my-3'>
//                                 <div className="mb-3">
//                                     <label htmlFor="title" className="form-label">Title</label>
//                                     <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onchange} value={product.Options} minLength={5} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="description" className="form-label">Description</label>
//                                     <input type="text" className="form-control" id="edescription" name="edescription" onChange={onchange} value={product.Amount} minLength={5} required />
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary" onClick={handleClick}>Update Product</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default UpdateModal