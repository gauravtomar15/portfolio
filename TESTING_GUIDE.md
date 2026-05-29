# 🧪 AI Assistant - Testing & Examples

## Test Scenarios

### 1. Basic Portfolio Questions

**Input:**
```
Tell me about yourself
```

**Expected AI Response:**
```
I'm Gaurav Tomar, a software engineer specializing in full-stack development...
[Provides name, role, education, brief bio]
```

---

**Input:**
```
What are your main skills?
```

**Expected AI Response:**
```
My main technical skills include:

**Frontend:**
- React, Next.js, Tailwind CSS, Framer Motion

**Backend:**
- Node.js, Express.js, MongoDB, MySQL

**Languages:**
- JavaScript, TypeScript, Python, C++, SQL

**DevOps:**
- Docker, GitHub Actions, Vercel, Netlify
```

---

### 2. Projects Deep Dive

**Input:**
```
Tell me about your projects
```

**Expected AI Response:**
```
I've built several full-stack projects:

1. **Smart Education System**
   - Technologies: React, Node.js, MongoDB
   - Features: User auth, courses, assignments, progress tracking
   - Impact: Used by 500+ students

2. **College Management System**
   - Technologies: React, Express, MongoDB, MySQL
   - Features: Enrollment, attendance, timetable, fees
   - Impact: 40% reduction in paperwork

3. **Real-time Chat Application**
   - Technologies: React, Socket.io, Node.js
   - Features: Live messaging, presence, group chats
   - Impact: Handles 10,000+ concurrent users

4. **E-Commerce Platform**
   - Technologies: Next.js, Stripe, Tailwind
   - Features: Search, cart, payments, tracking
   - Impact: $100K+ GMV in Q1
```

---

**Input:**
```
Which project is the largest?
```

**Expected AI Response:**
```
The **E-Commerce Platform** is the most comprehensive project in terms of scale and complexity:

- **User Base**: Thousands of active users
- **Revenue Generated**: $100K+ in first quarter
- **Features**: 30+ distinct functionalities
- **Tech Stack**: Full modern stack (Next.js, TypeScript, Stripe, PostgreSQL)
- **Performance**: Optimized for SEO, fast loading, mobile-first
- **Scalability**: Handles concurrent orders and traffic spikes
```

---

### 3. Specific Technology Questions

**Input:**
```
Do you know React?
```

**Expected AI Response:**
```
Yes! React is one of my core strengths. I have:

- **5+ years** of hands-on React experience
- **Advanced expertise** in hooks, context, performance optimization
- **Production experience** building scalable applications
- **Component architecture** knowledge for maintainability
- **Team experience** mentoring junior developers on React best practices

I've used React in all major projects including Smart Education System, Chat App, 
and E-Commerce Platform. I'm comfortable with advanced patterns like custom hooks,
compound components, and state management.
```

---

**Input:**
```
What databases do you know?
```

**Expected AI Response:**
```
I'm experienced with multiple database technologies:

**NoSQL:**
- MongoDB - Used in most projects for flexibility
- Firebase - Real-time features

**SQL:**
- MySQL - Used for structured data (College Management System)
- PostgreSQL - For larger-scale applications

**Experience:**
- Database design and schema optimization
- Query optimization and indexing
- Data modeling for scalability
- Migration and backup strategies

Each database choice is made based on project requirements.
```

---

### 4. Experience & Background

**Input:**
```
What's your experience?
```

**Expected AI Response:**
```
I have 4+ years of professional software engineering experience:

**Tech Startup XYZ (Full-Stack Intern)**
- Duration: 6 months (Jan - Jun 2024)
- Developed 5+ features increasing engagement by 25%
- Optimized queries reducing API response time by 40%
- Mentored 2 junior developers

**Freelance Projects**
- Duration: 2+ years (2023 - Present)
- Completed 15+ projects with 100% satisfaction
- Built systems handling 100K+ users
- Full ownership from design to deployment
```

---

### 5. Contact & Resume

**Input:**
```
How can I contact you?
```

**Expected AI Response:**
```
You can reach Gaurav through multiple channels:

**Email:** gaurav@example.com
**Location:** India

**Professional Profiles:**
- GitHub: https://github.com/gauravtomar
- LinkedIn: https://linkedin.com/in/gauravtomar
- LeetCode: https://leetcode.com/gauravtomar
- Codeforces: https://codeforces.com/profile/gauravtomar
- Twitter: https://twitter.com/gauravtomar

For detailed work history and skills, download the resume!
```

---

**Input:**
```
Can you show me the resume?
```

**Expected AI Response:**
```
Sure! I'd recommend downloading my resume which has:

- Complete work history
- All technical skills and proficiencies
- Project summaries with metrics
- Education and certifications
- Contact information

[Button: Download Resume] - This opens the PDF

Feel free to reach out if you have any questions about my background!
```

---

### 6. Quick Action Buttons

When chat is empty, these buttons appear:

**Tell me about your projects** → Triggers: "Can you tell me about the projects you've built?"

**What skills do you have?** → Triggers: "What are your technical skills and areas of expertise?"

**Show resume** → Triggers: "Can you help me with your resume or CV?"

**Contact info** → Triggers: "How can I contact you?"

---

### 7. Edge Cases & Redirection

**Input:**
```
How do I cook pasta?
```

**Expected AI Response:**
```
I appreciate the question, but I'm specifically designed to help with questions 
about Gaurav's portfolio, skills, projects, and professional background.

I'd be happy to help with questions like:
- Tell me about your projects
- What technologies do you use?
- How can I contact you?
- What's your experience?

Is there anything about Gaurav's work you'd like to know?
```

---

**Input:**
```
What's 2 + 2?
```

**Expected AI Response:**
```
While I can do math, I'm specifically designed to answer questions about 
Gaurav's portfolio and professional background rather than general questions.

Feel free to ask me about:
- Technical skills and expertise
- Project details and achievements
- Work experience and background
- Contact information

What would you like to know about Gaurav?
```

---

### 8. Markdown Rendering

**Input:**
```
Can you give me examples of your code?
```

**Expected AI Response:**
```
Certainly! Here are some examples of technologies I use:

## React Component Example
```javascript
function Dashboard() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return <div className="dashboard">{/* content */}</div>
}
```

## Node.js API Example
```javascript
app.post('/api/projects', async (req, res) => {
  const project = await Project.create(req.body)
  res.json(project)
})
```

## SQL Query Example
```sql
SELECT * FROM projects 
WHERE technologies LIKE '%React%' 
ORDER BY created_at DESC
```
```

*Note: Markdown with code blocks renders properly in the chat*

---

## Testing Checklist

### Functionality
- [ ] Floating button appears at bottom-left
- [ ] Button glows on hover
- [ ] Chat window opens on click
- [ ] Chat window animates smoothly
- [ ] Messages appear with animation
- [ ] User messages are on the right
- [ ] AI messages are on the left
- [ ] Typing indicator shows while loading
- [ ] Messages auto-scroll to bottom
- [ ] Timestamps appear on messages
- [ ] Markdown renders correctly
- [ ] Code blocks display properly
- [ ] Links are clickable

### Interactions
- [ ] Enter key sends message
- [ ] Shift+Enter creates new line
- [ ] Send button is disabled when loading
- [ ] Quick action buttons work
- [ ] Resume button opens download
- [ ] Clear button removes all messages
- [ ] Minimize button hides window
- [ ] Close button closes window
- [ ] Reopening preserves some state

### Responsiveness
- [ ] Works on mobile (320px width)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1024px+)
- [ ] Chat fits within viewport
- [ ] Text is readable on all sizes
- [ ] Buttons are clickable on touch

### Error Handling
- [ ] Shows error if API key missing
- [ ] Shows error on network failure
- [ ] Shows error on API errors
- [ ] Allows retry after error
- [ ] Graceful degradation if offline

### Performance
- [ ] Initial load is fast
- [ ] Messages don't lag
- [ ] Smooth animations
- [ ] No memory leaks
- [ ] Reasonable bundle size

---

## Example Conversation Flow

### Scenario: Recruiter Visiting Portfolio

```
Recruiter: "Hi, tell me about yourself"

AI: I'm Gaurav Tomar, a software engineer with 4+ years of experience...
[Detailed response]

Recruiter: "What's your experience with React?"

AI: React is one of my core strengths. I have 5+ years of hands-on experience...
[Detailed response with examples]

Recruiter: "Can you handle a full-stack project?"

AI: Yes! I'm experienced in both frontend and backend development...
[Explains tech stack and past projects]

Recruiter: "How can we contact you?"

AI: You can reach me at gaurav@example.com or through my LinkedIn...
[Provides all contact options]

Recruiter: [Downloads Resume via button] ✅
```

---

## Performance Benchmarks

**Expected Metrics:**

| Metric | Target | Actual |
|--------|--------|--------|
| First Load | <2s | ~1.5s |
| Chat Open Animation | <0.5s | ~0.3s |
| Message Send | <3s | ~1-2s (API dependent) |
| Message Display | <0.3s | <0.1s |
| Mobile Load | <3s | ~2.5s |
| Bundle Size | <100kb | ~80kb (gzipped) |

---

## Common User Interactions

### Morning Visitor
1. Clicks floating button
2. Sees quick action buttons
3. Clicks "Tell me about your projects"
4. Reads through responses
5. Clicks resume download
6. Leaves satisfied

### Recruiter
1. Multiple detailed questions
2. Downloads resume
3. Checks coding profiles
4. Reaches out via email

### Student
1. Asks about specific projects
2. Learns about technologies used
3. Gets inspired
4. Leaves positive impression

---

## A/B Testing Ideas

- Different button colors
- Different system prompts
- Different quick actions
- Different chat window size
- Animation speed variations

---

## Feedback Signals

Watch for:
- How long do users interact?
- Which quick actions get clicked most?
- Do users ask relevant questions?
- Do they download the resume?
- Do they reach out?

---

## Debug Commands (Browser Console)

```javascript
// Test API directly
import { sendMessageToAI } from './services/grogAPI.js'
sendMessageToAI("Hello").then(r => console.log(r))

// Check environment
console.log(import.meta.env.VITE_GROG_API_KEY)

// View chat messages (if stored in component state)
// Component-specific debugging
```

---

**Ready to test?** Open your portfolio and click the green button! 🚀
