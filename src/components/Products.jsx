import React, {useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useParams, useHistory} from "react-router-dom";
const Products = ()=>{
    const history = useHistory()
    history.listen((location, action) => {
        console.log('sdf')
    })
    let queryParams = useParams();
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true)
            const response = await fetch('https://davidani.com/api/api/category-products/'+queryParams.category)
                .then(res => res.json())
                .then(
                    (result) => {
                        setFilter(result.data)
                        setData(result.data)
                        setLoading(false)
                    })
            return ()=>{
                componentMounted = false
            }
        }
        getProduct()
    }, [])
    const Loading = ()=>{
        return (
            <>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
            </>

        )
    }
    const ShowProduct = ()=>{
        return (
            filter.map((product)=>{
                return(
                    <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding" key={'key_'+product.id.toString()}>
                        <div className="product_wrapper" >
                            <a href="#">
                                <div className="main_product_img">
                                    <img src={product.images[0].compressed_image} className="img-fluid" alt="" />
                                </div>
                            </a>
                            <div className="main_product_text">
                                <h2><a href="#">{product.name.substring(0,100)}</a></h2>
                                {product.orig_price_formatted? (<p>${product.price_formatted}</p>) : (<p> <span className="update_price">${product.price_formatted}</span> <span className="line_through">${product.orig_price_formatted}</span> </p>) }

                            </div>
                            <ul className="color_variation">
                                <li className="active"><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                            </ul>
                        </div>
                    </div>
                )
                })

        )
    }
    return(
        <>
            <section className="product_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb nz_bredcrumb">
                                    <li className="breadcrumb-item"><a href="#">Women</a></li>
                                    <li className="breadcrumb-item"><a href="#">New Arrivals</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Feb 10</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-12 col-md-6 d_none">
                            <div className="product_wrap_title pwr_mobile ">
                                <h2><span>NEW ARRIVALS</span> <span className="d_none"><i
                                    className="lni lni-chevron-down"></i></span></h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="product_filter">
                                <ul>
                                    <li className="m_none"><span>Category</span>
                                        <div className="filter_megamenu">
                                            <div className="category_filter_wrap">
                                                <h2>Category</h2>
                                                <div className="category_filter">
                                                    <div className="inner">
                                                        <ul id="left_cat" className="left_cat">
                                                            <li>
                                                                <a role="button" onClick={()=>setFilter(data)}>View All</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Booties</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Boots</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Espadrilles</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Flats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Heels</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Mules</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sandals</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Slippers</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="inner">
                                                        <ul>
                                                            <li>
                                                                <a href="#" title="All New Arrivals">All New
                                                                    Arrivals</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 18</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 17</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 16</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 15</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 14</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 13</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Feb 12</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Last Week</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product_fliter_btn">
                                                <button className="btn">
                                                    Done
                                                </button>
                                                <span>clear</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li><span>Color</span>
                                        <div className="filter_megamenu">
                                            <h2>Color</h2>
                                            <ul className="color_filter">
                                                <li>
                                                    <div className="color_checkbox">
                                                        <input type="checkbox" id="color1" name="color" />
                                                        <label htmlFor="color1">
                                                            <img
                                                                src="../images/product/single-img-thumbnail3.jpg"
                                                                alt="" className="img-fluid width_full height_full" />
                                                            <span>Color 1</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="color_checkbox">
                                                        <input type="checkbox" id="color2" name="color" />
                                                        <label htmlFor="color2">
                                                            <img
                                                                src="../images/product/single-img-thumbnail2.jpg"
                                                                alt="" className="img-fluid width_full height_full" />
                                                            <span>Color 2</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="color_checkbox">
                                                        <input type="checkbox" id="color3" name="color" />
                                                        <label htmlFor="color3">
                                                            <img
                                                                src="../images/product/single-img-thumbnail5.jpg"
                                                                alt="" className="img-fluid width_full height_full" />
                                                            <span>Color 3</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="color_checkbox">
                                                        <input type="checkbox" id="color4" name="color" />
                                                        <label htmlFor="color4">
                                                            <img
                                                                src="../images/product/single-img-thumbnail4.jpg"
                                                                alt="" className="img-fluid width_full height_full" />
                                                            <span>Color 4</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="color_checkbox">
                                                        <input type="checkbox" id="color5" name="color" />
                                                        <label htmlFor="color5">
                                                            <img
                                                                src="../images/product/single-img-thumbnail5.jpg"
                                                                alt="" className="img-fluid width_full height_full" />
                                                            <span>Color 5</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="color_checkbox">
                                                        <input type="checkbox" id="color6" name="color" />
                                                        <label htmlFor="color6">
                                                            <img
                                                                src="../images/product/single-img-thumbnail2.jpg"
                                                                alt="" className="img-fluid width_full height_full" />
                                                            <span>Color 6</span>
                                                        </label>
                                                    </div>
                                                </li>

                                            </ul>
                                            <div className="product_fliter_btn">
                                                <button className="btn">
                                                    Done
                                                </button>
                                                <span>clear</span>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main_product_area">
                    <div className="container-fluid">
                        <div className="row product_custom_margin">
                            {loading ? <Loading /> : <ShowProduct />}
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pagination_global">
                                    <div className="product_pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination d_flex_center">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" tabIndex="-1"><i
                                                        className="lni lni-chevron-left"></i></a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                                <li className="page-item"><a className="page-link" href="#">15</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#"><i
                                                        className="lni lni-chevron-right"></i></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
