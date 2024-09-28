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
                    <div>
                        <button href='#' className="dipt-assesment-change-buttons" onClick={() => showPage('page1')}>1</button>
                    </div>
                    <button className="dipt-assesment-change-buttons" onClick={() => showPage('page2')}>2</button>
                    <button className="dipt-assesment-change-buttons" onClick={() => showPage('page3')}>3</button>
                    <button className="dipt-assesment-change-buttons" onClick={() => showPage('page4')}>4</button>
                    <button className="dipt-assesment-change-buttons" onClick={() => showPage('page5')}>5</button>
                </div>

                <div className='dipt-assesment-content-parent'>
                    <div id="page1" className={`swift-architecture-page ${activePage === 'page1' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Architecture Type A1 (Communication Interface)</h3>
                                    <p className='dipt-assesment-process-p-data'>Architecture A1 is defined by user ownership of the communication interface, often including the messaging interface as well. Architecture A1 also applies to scenarios where the user owns only the communication interface. This category encompasses hosted solutions where the user owns a communication interface license operated either on behalf of others or by a third party for the user’s personal use, inside or outside their environment, such as an Alliance Gateway Instant connected to a back-office system without a Messaging Interface.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page2" className={`swift-architecture-page ${activePage === 'page2' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Architecture Type A2 (Messaging Interface Only)</h3>
                                    <p className='dipt-assesment-process-p-data'>In Architecture A2, users own the messaging interface while the communication interface is managed by a service provider, such as a service bureau or Swift. This architecture also covers instances where the messaging interface license, owned by the user, is hosted or operated by a third party or service provider, acting as an outsourcing agent.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page3" className={`swift-architecture-page ${activePage === 'page3' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Architecture Type A3 (SWIFT Connector)</h3>
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
                                    <h3 className='dipt-assesment-process-header-data'>Architecture Type A4 (Customer Connector)</h3>
                                    <p className='dipt-assesment-process-p-data'>Architecture A4, known as the Customer Connector, applies to users without a direct Swift presence, utilizing a server within their environment (e.g., a file transfer solution or middleware server) to establish external application-to-application connections with Swift-related applications or solutions provided by a service bureau, Business Connect, Lite2 Business Application provider, or Group Hub. This architecture also covers cases where the customer connector is hosted or operated by a third party or service provider, acting as an outsourcing agent.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page5" className={`swift-architecture-page ${activePage === 'page5' ? 'activepage' : ''}`}>
                        <div className='assesment-content-data-container'>

                            <div>
                                <div className='dipt-assesment-process-data-mini-container'>
                                    <h3 className='dipt-assesment-process-header-data'>Architecture Type B (GUI or Middleware Client)</h3>
                                    <p className='dipt-assesment-process-p-data'>Architecture B outlines scenarios where users engage with Swift services without any Swift-specific infrastructure in their local environment. This architecture encompasses two main setups: users accessing Swift messaging services via a GUI application provided by a service provider, and back-office applications of users communicating directly with the service provider using various clients (e.g., MQ, Kafka, Solace) or secure file transfer clients, without directly connecting to Swift’s specific messaging services. Devices used in these interactions are treated as general-purpose and require adequate protection.</p>
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