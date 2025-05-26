import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Save to database: await storage.createContactMessage(validatedData);
      // 2. Send email notification
      
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real application, you would serve the actual PDF file
    res.json({ 
      success: true, 
      downloadUrl: "/resume.pdf",
      message: "Resume download initiated" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
