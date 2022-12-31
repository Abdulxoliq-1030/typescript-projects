import React from "react";
import { Col, Form, Row, Stack } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
interface NoteFormProps {}

const NoteForm: React.FC<NoteFormProps> = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};

export default NoteForm;
