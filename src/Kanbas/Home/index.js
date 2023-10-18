import ModuleList from "../Modules/ModuleList";


function Home() {
    const statusNames = ['Import Existing Content', 'Import From Commons', 'Choose Home Page', 'View Course Stream', 'New Announcement', 'New Analytics', 'View Course Notifications']
    const comingUp = ['View Calendar', 'Lecture CS4550.12631.202410 Sep 7 at 11:45am', 'Lecture CS4550.12631.202410 Sep 11 at 11:45am', 'CS5610 06 SP23 Lecture Sep 11 at 6pm']
    return (
        <div>
            <td width="100%" valign="top">
                <ModuleList/>
            </td>
            <td className="status-left-padding d-none d-xxl-table-cell d-xl-table-cell d-lg-none">
                <div className="status">
                    <h2>Course Status</h2>
                    <form>
                        <button type="button" class="btn btn-light">Unpublish</button>
                        <button type="button" class="btn btn-success">Publish</button>
                        <br/>
                        {statusNames.map(name => (
                            <li className='margin-bottom-status align-items-center list-group-item list-group-item-secondary second-list-group-item'><a href="#">{name}</a></li>
                        ))}
                        <br/>
                        <h2>Coming Up</h2>
                        {comingUp.map(name => (
                            <li className='margin-bottom-status list-group-item  align-items-center list-group-item-secondary second-list-group-item'><a href="#">{name}</a></li>
                        ))}
                    </form>
                </div>
            </td>
        </div>
    )
}

export default Home;