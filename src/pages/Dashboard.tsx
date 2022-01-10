import React, { useState, useEffect, Fragment } from 'react';
import { AuthService } from '../services/AuthService';
import { TagService } from "../services/TagService";

async function getTags() {
    let tagService = new TagService();
    // let authService = new AuthService();
    // let data = await tagService.getAllTags();
    let tag = await tagService.getTagById(2);
}


function Dashboard() {
    useEffect(() => {
        getTags();
    }, [])

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Total News</div>
                                <div className="widget-subheading">Last year expenses</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>1896</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-arielle-smile">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Top</div>
                                <div className="widget-subheading">Total Clients Profit</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>500</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Sports</div>
                                <div className="widget-subheading">People Interested</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>123</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-premium-dark">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Products Sold</div>
                                <div className="widget-subheading">Revenue streams</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-warning"><span>$14M</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="mb-3 card">
                        <div className="card-header-tab card-header-tab-animation card-header">
                            <div className="card-header-title">
                                <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                Post Views
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tabs-eg-77">
                                    <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                        <div className="widget-chat-wrapper-outer">
                                            <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                <canvas id="canvas"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Top Authors</h6>
                                    <div className="scroll-area-sm">
                                        <div className="scrollbar-container">
                                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <img width="42" className="rounded-circle" src="assets/images/avatars/9.jpg" alt="" />
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Ella-Rose Henry</div>
                                                                <div className="widget-subheading">Web Developer</div>
                                                            </div>
                                                            <div className="widget-content-right">
                                                                <div className="font-size-xlg text-muted">
                                                                    <small className="opacity-5 pr-1">$</small>
                                                                    <span>129</span>
                                                                    <small className="text-danger pl-2">
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <img width="42" className="rounded-circle" src="assets/images/avatars/5.jpg" alt="" />
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Ruben Tillman</div>
                                                                <div className="widget-subheading">UI Designer</div>
                                                            </div>
                                                            <div className="widget-content-right">
                                                                <div className="font-size-xlg text-muted">
                                                                    <small className="opacity-5 pr-1">$</small>
                                                                    <span>54</span>
                                                                    <small className="text-success pl-2">
                                                                        <i className="fa fa-angle-up"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <img width="42" className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Vinnie Wagstaff</div>
                                                                <div className="widget-subheading">Java Programmer</div>
                                                            </div>
                                                            <div className="widget-content-right">
                                                                <div className="font-size-xlg text-muted">
                                                                    <small className="opacity-5 pr-1">$</small>
                                                                    <span>429</span>
                                                                    <small className="text-warning pl-2">
                                                                        <i className="fa fa-dot-circle"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <img width="42" className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Ella-Rose Henry</div>
                                                                <div className="widget-subheading">Web Developer</div>
                                                            </div>
                                                            <div className="widget-content-right">
                                                                <div className="font-size-xlg text-muted">
                                                                    <small className="opacity-5 pr-1">$</small>
                                                                    <span>129</span>
                                                                    <small className="text-danger pl-2">
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <img width="42" className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Ruben Tillman</div>
                                                                <div className="widget-subheading">UI Designer</div>
                                                            </div>
                                                            <div className="widget-content-right">
                                                                <div className="font-size-xlg text-muted">
                                                                    <small className="opacity-5 pr-1">$</small>
                                                                    <span>54</span>
                                                                    <small className="text-success pl-2">
                                                                        <i className="fa fa-angle-up"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title">
                                <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                Post Published
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="tab-eg-55">
                                <div className="widget-chart p-3">
                                    <div style={{ height: '350px' }}>
                                        <canvas id="line-chart"></canvas>
                                    </div>
                                    <div className="widget-chart-content text-center mt-5">
                                        <div className="widget-description mt-0 text-warning">
                                            <i className="fa fa-arrow-left"></i>
                                            <span className="pl-1">175.5%</span>
                                            <span className="text-muted opacity-8 pl-1">increased server resources</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="widget-content">
                                                <div className="widget-content-outer">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left">
                                                            <div className="widget-numbers fsize-3 text-muted">63%</div>
                                                        </div>
                                                        <div className="widget-content-right">
                                                            <div className="text-muted opacity-6">Generated Leads</div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-progress-wrapper mt-1">
                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                            {/* <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style={{width: '63%'}}></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="widget-content">
                                                <div className="widget-content-outer">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left">
                                                            <div className="widget-numbers fsize-3 text-muted">32%</div>
                                                        </div>
                                                        <div className="widget-content-right">
                                                            <div className="text-muted opacity-6">Submitted Tickers</div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-progress-wrapper mt-1">
                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                            {/* <div className="progress-bar bg-success" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{width: '32%'}}></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="widget-content">
                                                <div className="widget-content-outer">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left">
                                                            <div className="widget-numbers fsize-3 text-muted">71%</div>
                                                        </div>
                                                        <div className="widget-content-right">
                                                            <div className="text-muted opacity-6">Server Allocation</div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-progress-wrapper mt-1">
                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                            {/* <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style={{width: '71%'}}></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="widget-content">
                                                <div className="widget-content-outer">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left">
                                                            <div className="widget-numbers fsize-3 text-muted">41%</div>
                                                        </div>
                                                        <div className="widget-content-right">
                                                            <div className="text-muted opacity-6">Generated Leads</div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-progress-wrapper mt-1">
                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                            {/* <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100" style={{width: '41%'}}></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">All Post
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-focus">Last Week</button>
                                    <button className="btn btn-focus">This Month</button>
                                    <button className="btn btn-focus">All</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Title</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center text-muted">#345</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width="40" className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">John Doe</div>
                                                        <div className="widget-subheading opacity-7">Web Developer</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="badge badge-warning">Pending</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#347</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width="40" className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">Ruben Tillman</div>
                                                        <div className="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="badge badge-success">Completed</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-2" className="btn btn-primary btn-sm">Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#321</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width="40" className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">Elliot Huber</div>
                                                        <div className="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="badge badge-danger">In Progress</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-3" className="btn btn-primary btn-sm">Details</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-block text-center card-footer">
                            {/* <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                            <button className="btn-wide btn btn-success">Save</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export {Dashboard}