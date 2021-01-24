import React from 'react';
import { withRouter } from "react-router-dom";
import { Form,Button } from 'react-bootstrap';


const MicropostForm = (props) =>{
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);

        try{
            const res = await axios.post(
                '/api/microposts',
                { ...formDataObj},
            );
            console.log(res.data);
            props.history.push("/");
        } catch(err) {
            console.error(err);
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicTextarea">
                <Form.Control 
                    as="textarea" rows={3} 
                    placeholder="Compose new micropost..."
                    name="content"
                />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Post
            </Button>
        </Form>
    )
}
export default withRouter(MicropostForm);