// import express 
import express from "express";
// import controller cho tour
import {
    showTours,
    showTourById,
    createTour,
    updateTour,
    deleteTour,
} from "../controllers/tourController.js";

// init express router
const router = express.Router();

////////////////////////// TOUR ////////////////////////////////

// get all Tours
router.get("/api/tours", showTours);

// get single Tour
router.get("/api/tours/:id", showTourById);

// create Tour
router.post("/api/tours", createTour);

// update Tour
router.put('/api/tours/:id', updateTour);

// delete Tour
router.delete("/api/tours/:id", deleteTour);

// export default router
export default router;