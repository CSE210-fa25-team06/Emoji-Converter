# Emoji Converter – Design Document

---

## 1. Introduction
Emoji Converter is a web-based application that converts emojis into text and text into emojis.  The goal of this project is to demonstrate software engineering practices and to work together as a team on a fun project.  The application is built using HTML, CSS, JavaScript, and a Flask backend.

---

## 2. Objectives
1. Design and develop a web-based application that converts emojis into text and text into emojis.  
2. Apply and demonstrate software engineering practices.  
3. Produce a well-documented project within a one-week time frame.  
4. Enjoy the process of building something fun together while collaborating and communicating with each other.

---

## 3. Scope
1. Supports the most commonly used emojis from the Unicode CLDR Project.  
2. Users can input emojis or text and see the result on the same page without reloading.  
3. The front end will be built with HTML, CSS, and JavaScript and will communicate with a Flask backend that handles translation logic using CLDR data.  

Reference: [Unicode CLDR Project](https://github.com/unicode-org/cldr)

---

## 4. System Overview
The system is a web application built with HTML, CSS, and JavaScript.  It uses a Flask backend connected to the Unicode CLDR dataset.  The frontend sends user input to the Flask API for translation, and the backend retrieves the appropriate emoji or text from the CLDR data.  The formatted response is then returned to the client and rendered dynamically in the browser.

---

## 5. Functional Requirements
1. Users can input text which will be converted into emojis.  
2. Users can input emojis which will be converted into text.  
3. The system will display translations instantly on the same page without reloading.  
4. Invalid inputs will be handled gracefully with an appropriate message.  
5. The system will support an agreed-upon number of emojis.  
6. Code will include meaningful comments explaining its functionality.

---

## 6. Non-Functional Requirements
1. The system will run in the browser without installation or external dependencies.  
2. The team will demonstrate good software engineering practices.  
3. Project files and documentation will be clearly organized in the GitHub repository.

---

## 7. Tools and Technologies

### Frontend
- **HTML** – Structures the content of the webpage.  
- **CSS** – Styles the layout and appearance of the user interface.  
- **JavaScript** – Handles user interactions and communicates with the Flask API.  

### Backend
- **Python (Flask)** – Hosts the server, processes API requests, and performs emoji translation using CLDR data.  

### Data Source
- **Unicode CLDR JSON** – Provides emoji and text mappings for translation.  

### Development Tools
- **Git and GitHub** – Manage version control, branches, and team collaboration.  

### Testing and Quality Assurance
- **HTML Validator**, **CSS Linter**, **JavaScript Linter** – Check for code quality and consistency.  

### Documentation Tools
- **Markdown** – Used for README and repository documentation.  

---

## 8. Team Roles
- **Front End:** Siri, Jared, Isheta  
- **Backend/API:** Lei, Akshay, Tej, Adam  
- **Testing:** Tongke, Junjie, Austin  
- **Documentation + DevOps:** Patryk, Melvyn, Alex  
- **Project Coordination:** Isheta, Melvyn  

---

## 9. Software Engineering Practices
1. **Version Control:** All code is managed on GitHub with branches for each team. Pull requests must be reviewed by another team before merging into main. All tests must pass before merging.  
2. **Communication and Collaboration:** Slack is used for daily stand-ups summarizing completed work, upcoming tasks, and blockers.  
3. **Documentation:** Design documents, meeting notes, and related materials will be stored in the repository.  
4. **Code Quality:** Code follows consistent formatting (camelCase variable names, clear comments). No one-line code.

---

## 10. Design

### 10.1 Data Flow
`User Input → UI Capture → Flask API Call → CLDR Lookup → Conversion Logic → Response → UI Update`

### 10.2 Detailed Data Flow

**User Interaction:**  
`User types text/emoji → Input validation → Prepare API request`  

**API Communication:**  
`Frontend → HTTP POST /api/convert → Backend Router → Controller`  

**Backend:**  
`Controller → Validator → Emoji Converter → Matcher Algorithm → Response Formatter`  

**Frontend:**  
`Backend Response → UI Update → Display Results → Error Handling`

---

## 11. Implementation Plan

### Stage 1 – Planning and Setup
The front-end team designs the interface in Figma.  
The back-end team sets up the Flask server and connects it to the CLDR dataset.  
The testing team drafts test cases.  
The DevOps team configures GitHub Actions with HTML, CSS, and JS linters.

### Stage 2 – Development
The front-end team builds the layout using HTML, CSS, and JavaScript.  
The back-end team implements API endpoints for conversion logic.  
The testing team prepares validation scripts.  
The DevOps team sets up GitHub Pages for automatic deployment and CI/CD.

### Stage 3 – Integration and Testing
The front-end and back-end teams integrate the Flask API.  
The testing team runs functional and usability tests.  
The DevOps team ensures workflows pass and documentation is up to date.

### Stage 4 – Finalization and Demo
All teams review the final build, fix issues, and verify deployment.  
The testing team performs final regression tests.  
The DevOps team confirms successful deployment for the live demo.

---

## 12. Testing Plan

### Automated Code Quality Checks
- HTML Validator, CSS Linter, JavaScript Linter  

### Unit and Regression Testing
Unit tests verify individual emoji–text mappings.  
Example:  
- `❤️` → “heart”  
- `😂` → “laughing”  

### Integration Testing
Integration testing ensures all components work properly.  
Errors should return for:  
- Characters with no valid emoji mapping  
- Emojis with no valid English mapping  

### System Testing
**Functional:**  
- Text to Emoji conversion  
- Mixed emoji/text translation  
- Long input handling  

**Non-functional:**  
- Works across all major browsers  
- Reasonable response time  
- Easy to use  

---

## 13. Documentation and Deliverables

### Documentation
- **Design Document:** Outlines system architecture, requirements, and design decisions.  
- **Meeting Notes:** Summaries of team discussions and decisions.  
- **README.md:** Overview, setup instructions, usage guide, and team roles.  
- **Commented Code:** Each file includes clear explanations of functionality.

### Deliverables
- Completed web application that translates emojis and text.  
- GitHub repository with all source code and documentation.  
- Recorded demo video for class presentation.

---

## 14. Project Timeline

| Day | Task | To Do |
|-----|------|-------|
| **1 (Friday)** | Meet and discuss project scope | Setup GitHub and assign roles, brainstorm design document |
| **2 (Saturday)** | Finalize requirements and design | Begin setup for coding environment |
| **3 (Sunday)** | Start implementation | Coding |
| **4 (Monday)** | Continue development | Coding |
| **5 (Tuesday)** | Complete implementation | Merge and test integrated code |
| **6 (Wednesday)** | Full testing and finalize documentation | Perform tests, record demo |
| **7 (Thursday)** | Presentation preparation | Practice and final demo |

---

## 15. Conclusion
The Emoji Converter project gave the team a chance to work closely and learn how each person approaches problem solving.  As our first project together, we learned each other’s work styles and habits while building the website.  Through designing, coding, testing, and deploying, we developed new technical skills and learned how to collaborate more effectively as a team.
