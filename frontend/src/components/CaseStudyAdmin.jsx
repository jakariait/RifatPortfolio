"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import useAuthAdminStore from "@/store/AuthAdminStore";
import {Editor} from "primereact/editor";

const CaseStudyAdmin = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSlug, setCurrentSlug] = useState(null);
  const [formData, setFormData] = useState({
    brandTitle: "",
    brandWebsite: "",
    founder: "",
    businessStarted: "",
    industry: "",
    title: "",
    keyResults: "",
    description: "",
    brandLogo: null,
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { token } = useAuthAdminStore();

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    if (token) {
      fetchCaseStudies();
    }
  }, [token]);

  const fetchCaseStudies = async () => {
    try {
      const response = await api.get(`/casestudy`);
      setCaseStudies(response.data.data);
    } catch (error) {
      console.error("Error fetching case studies:", error);
    }
  };

  const handleClickOpen = () => {
    setIsEditing(false);
    setFormData({
      brandTitle: "",
      brandWebsite: "",
      founder: "",
      businessStarted: "",
      industry: "",
      title: "",
      keyResults: "",
      description: "",
      brandLogo: null,
    });
    setOpen(true);
  };

  const handleEditClick = async (slug) => {
    try {
      const response = await api.get(`/casestudy/${slug}`);
      const data = response.data.data;
      setFormData({
        brandTitle: data.brandTitle,
        brandWebsite: data.brandWebsite,
        founder: data.founder,
        businessStarted: data.businessStarted,
        industry: data.industry,
        title: data.title,
        keyResults: data.keyResults,
        description: data.description,
        brandLogo: null,
      });
      setIsEditing(true);
      setCurrentSlug(slug);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching case study for edit:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e && e.target && e.target.name === 'description') {
      setFormData({ ...formData, description: e.htmlValue });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, brandLogo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        submissionData.append(key, formData[key]);
      }
    }

    try {
      if (isEditing) {
        await api.put(`/casestudy/${currentSlug}`, submissionData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/casestudy", submissionData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      fetchCaseStudies();
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this case study?")) {
      try {
        await api.delete(`/casestudy/${slug}`);
        fetchCaseStudies();
      } catch (error) {
        console.error("Error deleting case study:", error);
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={"xl:container xl:mx-auto p-4"}>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mb: 2 }}>
        Add New Case Study
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {isEditing ? "Edit Case Study" : "Add Case Study"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="brandTitle"
              label="Brand Title"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.brandTitle}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="brandWebsite"
              label="Brand Website"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.brandWebsite}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="founder"
              label="Founder"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.founder}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="businessStarted"
              label="Business Started"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.businessStarted}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="industry"
              label="Industry"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.industry}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="keyResults"
              label="Key Results"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={formData.keyResults}
              onChange={handleChange}
            />
            <Editor
              // ref={editorRef}
              value={formData.description}
              onTextChange={(e) => handleChange({ target: { name: 'description' }, htmlValue: e.htmlValue })}
              style={{ height: "320px" }}
            />

            <Button variant="contained" component="label" sx={{ mt: 2 }}>
              Upload Brand Logo
              <input
                type="file"
                name="brandLogo"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            {formData.brandLogo && <p>{formData.brandLogo.name}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">{isEditing ? "Update" : "Create"}</Button>
          </DialogActions>
        </form>
      </Dialog>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {caseStudies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((study) => (
                <TableRow key={study.slug}>
                  <TableCell>{study.title}</TableCell>
                  <TableCell>{study.industry}</TableCell>
                  <TableCell>{study.brandTitle}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditClick(study.slug)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(study.slug)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={caseStudies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default CaseStudyAdmin;
