import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import path from "path";

// Schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
});

type ContactMessage = z.infer<typeof contactSchema>;

// In-memory storage for contact messages
const contactMessages: ContactMessage[] = [];

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Store message in memory
      contactMessages.push(validatedData);
      
      // Log message for debugging
      console.log('New contact message received:', validatedData);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Nachricht erfolgreich empfangen"
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validierungsfehler", 
          errors: error.errors 
        });
      }
      
      // Handle other errors
      return res.status(500).json({ 
        success: false, 
        message: "Ein Serverfehler ist aufgetreten" 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get('/api/contact', (req: Request, res: Response) => {
    return res.status(200).json(contactMessages);
  });
  
  // Serve static download files
  app.use('/downloads', (req, res, next) => {
    const filePath = path.join(process.cwd(), 'public', 'downloads', req.path);
    res.sendFile(filePath, (err) => {
      if (err) {
        next();
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
