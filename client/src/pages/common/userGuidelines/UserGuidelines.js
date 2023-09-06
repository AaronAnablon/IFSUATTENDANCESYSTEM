import { Button, Card, Col, Layout, Row, Avatar, Divider, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import { Footer } from '../../../components/common/sharedLayout';
import 'rc-texty/assets/index.css';
const { Content } = Layout;
const { Title } = Typography;
export default () => {
    return (
        <Layout className='home layout'>
            <HeaderNavbar />
            <Content>
                <Card>
                    <Row>
                        <Title level={2}>User Guidelines</Title>
                    </Row>
                    {/*           
                    <Row>
                        There are 2 user roles which are "Student/Employee" and "Admin Controls"
                    </Row> */}
                </Card>
                <Divider />
                {/* <Card>
                    <Row>
                        Instructions For Admin Controls:
                    </Row>
                    <Row>
                        1. Register an account.
                    </Row>
                    <Row>
                        2. Create a Department Name.
                    </Row>
                    <Row>
                        3. Give the Department unique ID to your attendees.
                    </Row>
                    <Row>
                        4. Students need to send the request to enrol, approve the enrolment.
                    </Row>
                    <Row>
                        5. You do not need upload attendee's face photo, which will be done by attendees.
                    </Row>
                    <Row>
                        6. After all student enrolled, select a Department and take the attendance.
                    </Row>
                    <Row>
                        7. You can see how many face photo of all the enrolled students have uploaded.
                    </Row>
                    <Row>
                        8. Ensure that the students upload their face photo, otherwise there is no facial data of that student for reference.
                    </Row>
                    <Row>
                        9. Only those enrol in the particular Department will be counted into dataset for facial classification.
                    </Row>
                    <Row>
                        10. Inside attendance taking form, select the time, date and camera.
                    </Row>
                    <Row>
                        11. Wait for all the models being loaded.
                    </Row>
                    <Row>
                        12. Set the approriate threshold distance as you wish.
                    </Row>
                    <Row>
                        13. Submit the attendance form if finished.
                    </Row>
                    <Row>
                        14. Visualize the attendance data in "Attendance History", or you can enter a particular Department and click "View Attendance History".
                    </Row>
                    <Row>
                        15. You can "Warn" or "Kick" the student/employee out of a Department.
                    </Row>
                    <Row>
                        16. The face photo of the student/employee who is kicked out will not be counted next time taking the attendance.
                    </Row>
                </Card> */}
                <Divider />
                <Card>
                    <Row>
                        Instructions For Student:
                    </Row>
                    <Row>
                        1. Register an account.
                    </Row>
                    <Row>
                        2. Enrol a Department.
                    </Row>
                    <Row>
                        3. Wait for the system to load.
                    </Row>
                    <Row>
                        4. Upload your face photo in "Face Gallery", best to have at least 2 face photo.
                    </Row>
                    <Row>
                        5. Wait for all models being loaded.
                    </Row>
                    <Row>
                        6. The system will perform face detection, ensuring only a single face exist and rejecting photo with empty face or multiple faces.
                    </Row>
                    <Row>
                        7. The photo will be uploaded to the image storage.
                    </Row>
                    <Row>
                        8. When your lecturer take the attendance of a particular Department, all your uploaded facial data will be counted into the dataset for facial comparison.
                    </Row>
                    <Row>
                        9. Visualize the attendance data in "Attendance History", or you can enter a particular Department and click "View Attendance History".
                    </Row>

                </Card>
                <Divider />
            </Content>
            <Footer />
        </Layout>
    )
}
