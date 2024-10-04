import React, { useState } from 'react';

const AssesmentChangingPageButton = () => {
    const [activePage, setActivePage] = useState('page1');
    const showPage = pageId => {
        setActivePage(pageId);
    }
    return (
        <div>
            <div>

                <div className="assesment-page-buttons-container">
                    <div className='assesment-btn-details-container'>
                        <button className="dipt-assesment-change-buttons" onClick={() => showPage('page1')}>1</button>
                        <h3 className='assesment-buttons-under-design assesment-details-title'>Kick-off Meeting</h3>
                        <p className='assesment-buttons-under-design assesment-details-p'>Prepare the Independent Assessment</p>
                    </div>

                    <div className='assesment-btn-details-container'>
                        <button className="dipt-assesment-change-buttons" onClick={() => showPage('page2')}>2</button>
                        <h3 className='assesment-buttons-under-design assesment-details-title'>Collect Evidence and Artifacts</h3>
                        <p className='assesment-buttons-under-design assesment-details-p'>Customer compiles and shares necessary evidence and artifacts</p>
                    </div>

                    <div className='assesment-btn-details-container'>
                        <button className="dipt-assesment-change-buttons" onClick={() => showPage('page3')}>3</button>
                        <h3 className='assesment-buttons-under-design assesment-details-title'>Document Review</h3>
                        <p className='assesment-buttons-under-design assesment-details-p'>Assessor team evaluates the shared documentation and identifies interview requirements</p>
                    </div>

                    <div className='assesment-btn-details-container'>
                        <button className="dipt-assesment-change-buttons" onClick={() => showPage('page4')}>4</button>
                        <h3 className='assesment-buttons-under-design assesment-details-title'>Assessment Interview</h3>
                        <p className='assesment-buttons-under-design assesment-details-p'>Testing and verification of applicable SWIFT CSP controls</p>
                    </div>

                    <div className='assesment-btn-details-container'>
                        <button className="dipt-assesment-change-buttons" onClick={() => showPage('page5')}>5</button>
                        <h3 className='assesment-buttons-under-design assesment-details-title'>Reporting</h3>
                        <p className='assesment-buttons-under-design assesment-details-p'>Assessment report and confirmation letters are generated and shared with the customer</p>
                    </div>
                </div>

                <div className='dipt-assesment-content-parent'>
                    <div id="page1" className={`swift-architecture-page ${activePage === 'page1' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Kick-Off Meeting</h3>
                                    <p className='dipt-assesment-process-p-data'> Prepare for the assessment by understanding the Swift user's environment and objectives  Collect architecture documentation, use CSCF and decision tree for CSP architecture type, derive applicable CSP controls, and conduct workshops for scope definition  Architecture documentation, key processes, and Swift CSP documentation  Assessment scope, agreed schedule, assigned resources.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page2" className={`swift-architecture-page ${activePage === 'page2' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Collect Evidence and Artifacts</h3>
                                    <p className='dipt-assesment-process-p-data'> Prepare for the assessment by understanding the Swift user's environment and objectives  Collect architecture documentation, use CSCF and decision tree for CSP architecture type, derive applicable CSP controls, and conduct workshops for scope definition  Architecture documentation, key processes, and Swift CSP documentation  Assessment scope, agreed schedule, assigned resources.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page3" className={`swift-architecture-page ${activePage === 'page3' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Document Review</h3>
                                    <p className='dipt-assesment-process-p-data'>A Swift connector is employed within the user’s environment to enable application-to-application communication with a service provider’s interface (like a service bureau or a Group Hub) or Swift services (e.g., Alliance Cloud or Alliance Lite2), without owning any messaging or communication interface.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page4" className={`swift-architecture-page ${activePage === 'page4' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Assessment Interview</h3>
                                    <p className='dipt-assesment-process-p-data'> Prepare for the assessment by understanding the Swift user's environment and objectives  Collect architecture documentation, use CSCF and decision tree for CSP architecture type, derive applicable CSP controls, and conduct workshops for scope definition  Architecture documentation, key processes, and Swift CSP documentation  Assessment scope, agreed schedule, assigned resources.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page5" className={`swift-architecture-page ${activePage === 'page5' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Reporting</h3>
                                    <p className='dipt-assesment-process-p-data'> Prepare for the assessment by understanding the Swift user's environment and objectives  Collect architecture documentation, use CSCF and decision tree for CSP architecture type, derive applicable CSP controls, and conduct workshops for scope definition  Architecture documentation, key processes, and Swift CSP documentation  Assessment scope, agreed schedule, assigned resources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AssesmentChangingPageButton;