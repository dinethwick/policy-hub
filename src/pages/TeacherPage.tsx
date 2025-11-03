import { useState } from 'react'
import MindMap from '../components/MindMap'
import DocumentationLayout from '../components/DocumentationLayout'

const TeacherPage = () => {
  const [visualizationType, setVisualizationType] = useState<'mindmap' | 'documentation'>('documentation')
  const teacherNodes = [
    {
      id: 'learning',
      title: 'Learning',
      description: 'Guidelines for using AI in educational contexts, including concept review, staff training, and material usage policies.',
      level: 0,
      x: 0,
      y: 0,
      children: [
        {
          id: 'quick-concept-review',
          title: 'Quick Concept Review',
          description: 'Generally allowed for personal preparation. Educators must still comply with the rule prohibiting the upload of university-owned course materials or any other copyrighted content. Cross-checking AI-generated information is strongly recommended.',
          scenario: {
            allowed: 'Dr Chen used AI to refresh his understanding of dynamic programming before preparing a lecture, then verified the explanation against a peer-reviewed source.',
            notAllowed: 'Dr Tim uploaded lecture slides and tutorial questions from the university\'s internal drive into AI to request a simplified summary on a certain topic'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'staff-training',
          title: 'Staff Training',
          description: 'Policies on using artificial intelligence for staff training are undefined in most universities. Some institutions impose restrictions, permitting use only by authorised personnel who can validate outputs and ensure adherence to safety procedures.',
          scenario: {
            allowed: 'Dr Chen used AI to draft sample discussion questions for a digital ethics workshop, then reviewed and refined them before inclusion in the official training slides.',
            notAllowed: 'Dr Tim used GenAI to generate laboratory safety instructions without reviewing accuracy or consulting the university\'s health-and-safety officer.'
          },
          level: 1,
          x: 0,
          y: 0,
        },
        {
          id: 'internal-materials',
          title: 'Use of Internal University Materials in Prompting',
          description: 'Prohibited by all universities due to copyright and security concerns, as most AI tools use user input to train their models.',
          scenario: {
            allowed: 'Dr Chen asked ChatGPT, "How can I explain recursion in a beginner-friendly way?" without using any university files or examples.',
            notAllowed: 'Dr Tim copied internal lab manuals into ChatGPT to request a simplified rewrite for students.'
          },
          level: 1,
          x: 0,
          y: 0,
        }
      ]
    },
    {
      id: 'grading',
      title: 'Grading',
      description: 'Comprehensive guidelines for AI-assisted grading, feedback generation, and assessment tools across different assignment types.',
      level: 0,
      x: 0,
      y: 0,
      children: [
        {
          id: 'feedback',
          title: 'Feedback',
          description: 'Guidelines for AI-generated feedback and evaluation systems in academic assessment.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'ai-generated-feedback',
              title: 'AI Generated Feedback',
              description: 'Currently, the use of AI to generate student feedback is prohibited in most universities. In institutions where it is allowed, human oversight must be applied to ensure fairness - the output must be reviewed and approved by the marker or course coordinator before being shared with students. Furthermore, students must be given the option to opt out of having their work marked using GenAI. Educators are also responsible for ensuring that students are aware of their right to opt out, and refraining from using GenAI to mark the work of any student who chooses to do so.',
              scenario: {
                allowed: 'Dr Chen used ChatGPT to draft general feedback phrases such as "Consider providing stronger evidence to support your claims," then edited and personalised them for each student\'s report after manual review.',
                notAllowed: 'Dr Tim uploaded all student essays into ChatGPT and pasted the generated feedback directly into the Gradebook without reviewing or obtaining student consent.'
              },
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'ai-summary-evaluation',
              title: 'AI Summary/Evaluation',
              description: 'Currently, the usage of AI to summarise or evaluate the work of students is restricted or otherwise undefined in all 28 ACDICT universities. In cases where it may be allowed, the marker must still review the entirety of the student\'s work to ensure the evaluation was accurate and fair. Students must be given the option to opt out of having their work evaluated using GenAI. Educators are also responsible for ensuring that students are aware of their right to opt out, and refraining from using GenAI to mark the work of any student who chooses to do so.',
              scenario: {
                allowed: 'Dr Chen used ChatGPT to summarise recurring themes from anonymised student reflections, then manually verified the summaries before writing his official evaluation report.',
                notAllowed: 'Dr Tim uploaded entire student assignments into ChatGPT to generate marks and evaluation comments automatically, without checking the results or seeking approval.'
              },
              level: 2,
              x: 0,
              y: 0,
            }
          ]
        },
        {
          id: 'ai-grading-tools',
          title: 'AI Grading Tools',
          description: 'Specialized AI tools for automated grading across different types of assignments and assessments.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'essay-written-graders',
              title: 'Essay and Written Assignment Graders',
              description: 'AI tools for grading written assignments with specific focus on plagiarism detection and language accuracy.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'plagiarism-reference-checking',
                  title: 'Plagiarism and Reference Checking',
                  description: 'Most universities use academic integrity monitoring software that utilises artificial intelligence. However, its output must be reviewed and checked by authorised staff (such as a course coordinator or academic integrity officer), and disciplinary decisions cannot be made solely based on their output. Policies on specific tools used for this task are not currently published by the ACDICT universities.',
                  scenario: {
                    allowed: 'Dr Chen used Turnitin\'s similarity report to identify potential issues, then manually reviewed the flagged sections and discussed them with the student before reporting a concern.',
                    notAllowed: 'Dr Tim automatically failed all papers above a 25% similarity score without reviewing whether the matches were legitimate references or template text.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'grammar-language-checks',
                  title: 'Grammar and Language Accuracy Checks',
                  description: 'The ACDICT universities have not publicly disclosed the specific tools they use for Grammar and Language Accuracy checks, or whether Artificial Intelligence is being utilised for this task. However, it can be assumed that in cases where it is used, its output must be reviewed and checked by the marker or course coordinator.',
                  scenario: {
                    allowed: 'Dr Chen used a grammar-checking AI tool to spot minor grammatical errors in student drafts before providing feedback, ensuring that all comments were consistent with marking criteria.',
                    notAllowed: 'Dr Tim relied entirely on AI-generated grammar feedback to determine grades for written assignments, without reviewing the student\'s original writing quality.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'genai-text-detection',
                  title: 'GenAI Text Generated Detection',
                  description: 'Most universities use academic integrity monitoring software that utilises artificial intelligence. However, its output must be reviewed and checked by authorised staff (such as a course coordinator or academic integrity officer), and disciplinary decisions cannot be made solely based on their output. Policies on specific tools used for this task are not currently published by the ACDICT universities.',
                  scenario: {
                    allowed: 'Dr Chen used an AI detection report as an initial indicator, then met with the student and cross-checked the writing history before escalating the case.',
                    notAllowed: 'Dr Tim assumed the AI report was conclusive proof of cheating and filed an academic misconduct report without any human review.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'coding-stem-graders',
              title: 'Coding & STEM Assignments Graders',
              description: 'AI tools specifically designed for grading programming and STEM-related assignments.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'code-plagiarism-detectors',
                  title: 'Code Plagiarism Detectors',
                  description: 'Most universities use academic integrity monitoring software that utilises artificial intelligence. However, its output must be reviewed and checked by authorised staff (such as a course coordinator or academic integrity officer), and disciplinary decisions cannot be made solely based on their output. Policies on specific tools used for this task are not currently published by the ACDICT universities.',
                  scenario: {
                    allowed: 'Dr Chen used MOSS results to identify students whose code appeared similar, then manually compared the logic and structure to confirm genuine duplication before reporting.',
                    notAllowed: 'Dr Tim penalised all students flagged by MOSS without checking whether the similarities were due to provided starter code or library imports.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'ai-generated-code-detectors',
                  title: 'AI Generated Code Detectors',
                  description: 'Most universities have not explicitly defined policies regarding the detection of AI-generated code. Some academic integrity systems may include functionality to flag AI-assisted programming submissions. However, their use remains largely unregulated or undefined. In all cases, outputs from such tools must be reviewed and verified by authorised academic staff before any disciplinary action is taken.',
                  scenario: {
                    allowed: 'Dr Chen used an AI-code detection tool to flag a suspicious submission, then examined the commit history and discussed the code with the student before concluding.',
                    notAllowed: 'Dr Tim treated every flagged file as AI-generated and issued misconduct penalties without investigation or evidence.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'auto-grading-tools',
                  title: 'Auto Grading Tools (Gradescope, EduSage)',
                  description: 'All ACDICT universities utilise auto-grading tools such as Gradescope and EduSage. However, they have not disclosed whether generative AI is to be used or integrated in these tools. Specific assessments may require creating test cases which the student\'s program must pass in order to receive the grade - AI may be possibly used to create these test cases. However, a concrete policy on this specific task has not been disclosed by any of the universities.',
                  scenario: {
                    allowed: 'Dr Chen used Gradescope\'s automated tests to evaluate code submissions, then manually reviewed outliers and partial-credit cases for fairness.',
                    notAllowed: 'Dr Tim relied entirely on auto-grading results to assign final marks without checking failed cases or reviewing the students\' implementation logic.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'course-design',
      title: 'Course Design',
      description: 'Guidelines for AI use in course design, lesson planning, curriculum development, and assignment creation.',
      level: 0,
      x: 0,
      y: 0,
      children: [
        {
          id: 'lesson-design-curriculum',
          title: 'Lesson Design/Curriculum',
          description: 'Guidelines for AI-assisted lesson planning and curriculum development.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'preparation-for-teaching',
              title: 'Preparation for Teaching',
              description: 'Guidelines for AI use in preparing teaching materials and adapting lessons.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'altering-lessons-perspectives',
                  title: 'Altering Lessons to Fit Student Perspectives',
                  description: 'Most universities are indifferent or have no defined use of AI to enhance lessons for different students\' perspectives. The remaining universities that\'ve defined this practice support its use. Educators must use caution and follow guidance procedures; they must verify AI output\'s accuracy and check it for mistakes and hallucinations. Educators must also ensure that AI is not the sole author of the lesson plan, the lesson plan is still inclusive and fair, and educators must be clear in its use in the lesson plan.',
                  scenario: {
                    allowed: 'Dr Chen used ChatGPT to adjust his lesson for students with a diverse background, simplifying complex theories to use beginner friendly language. Before teaching Dr Chen reviewed and corrected any inaccuracies.',
                    notAllowed: 'Dr Tim used ChatGPT to rewrite his entire lecture plan, presenting AI generated information without verifying the content. Resulting in misinformation in class.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'teaching-about-ai',
              title: 'Teaching about AI',
              description: 'Guidelines for teaching students about AI usage, ethics, and practical applications.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'ai-use-cases',
                  title: 'AI Use Cases',
                  description: 'Almost all universities permit/encourage teaching students how to properly use AI. Some universities have nothing on the systemUtilising AI use cases, educators must provide course/assignment information that explain AI\'s limitations, impacts on the quality of assignment work, and how to use AI ethically. Educators could write use cases for activities that teach how AI will likely be used professionally, or for enhancing ethical AI use.',
                  scenario: {
                    allowed: 'Dr Chen facilitated a workshop where students utilized generative AI tools to investigate ethical limits in marketing campaigns. Students evaluated the effectiveness of AI outputs and reflected on responsible usage.',
                    notAllowed: 'Dr Tim instructed students to conduct their research entirely using ChatGPT, without verifying the information or instructing them on how to assess AI generated content for accuracy.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'ethical-guidelines',
                  title: 'Ethical Guidelines',
                  description: 'Educators must provide students with guidelines on how to use AI ethically. Educators must also explain to students AI\'s limitations and impacts. For example, AI is limited as it can hallucinate and output misinformation, or it might output a response that involves advice on self harm. Educators are to define the extent AI can be ethically used for their course/assignments, and how to cite it properly.',
                  scenario: {
                    allowed: 'Dr Chen covered AI Ethics at the beginning of the semester, it facilitated discussions on topics such as bias, misinformation, data privacy, etc. Her explanation was explicit about the guidelines for incorporating AI into tasks.',
                    notAllowed: 'Dr Tim advised students to disregard ethical guidelines and use AI as they see fit, causing plagiarism and confusion about AI\'s proper citation practices.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'prompt-engineering',
                  title: 'Prompt Engineering',
                  description: 'Educators must define how to write AI prompts to create effective responses and clear responses. Educators must indicate how to be specific, set clear constraints, add context, and use follow-up prompts. Students must be explained how to critically evaluate AI responses, looking for mistakes and hallucinations.',
                  scenario: {
                    allowed: 'Dr Chen showed how to write prompts and follow up questions so that you get the right answers. Prior to submitting their findings, students were expected to evaluate AI outputs critically to ensure accuracy and bias.',
                    notAllowed: 'Dr Tim suggested that students utilize generative AI to produce complete essays using open ended prompts, without educating them on prompt structure or critical analysis.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'llm-creation',
                  title: 'LLM Creation',
                  description: 'Educators are to provide students with information or modules that explain how LLMs are created and trained. They must explain the facilities that run LLMs, what material they\'re trained on, and they must discuss where that material is sourced and how ethically it is used.',
                  scenario: {
                    allowed: 'Dr Chen created an activity that explains the process of training large language models with data that is freely available. The students investigated the use of ethical data sourcing and the presence of bias in training datasets.',
                    notAllowed: 'Dr Tim insisted that students would be compelled to upload copyrighted datasets into an AI model, which was against university and copyprotective policy.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            },
            {
              id: 'teaching-materials',
              title: 'Teaching Materials',
              description: 'Guidelines for creating and using teaching materials with AI assistance.',
              level: 2,
              x: 0,
              y: 0,
              children: [
                {
                  id: 'copyrighted-materials-prompting',
                  title: 'Use of Copyrighted Materials in Prompting',
                  description: 'Educators must not upload any copyrighted material into AI. This is the same for intellectual property, confidential or sensitive data, or any non-public domain data. First Nations knowledge protocols must be followed if applicable. This policy must be made clear to students as well.',
                  scenario: {
                    allowed: 'Dr Chen utilized AI tools to create summaries for classrooms by utilizing open-license, publicly accessible articles. The authenticity of the accuracy was confirmed by her, citing all AI-assisted outputs.',
                    notAllowed: 'Dr Tim broke copyright and licensing agreements by uploading a subscription-only textbook chapter into ChatGPT.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                },
                {
                  id: 'genai-creation-materials',
                  title: 'GenAI Creation of Materials',
                  description: 'AI may be used to generate teaching materials, such as theoretical scenarios or concept explanations, to support lesson preparation. Educators can generate these materials, but they must sufficiently edit the output to suit the specific needs of the lesson and to ensure the lesson plan is written by an educator. Educators must be transparent and cite that AI was used to generate teaching materials.',
                  scenario: {
                    allowed: 'Dr Chen utilized generative AI to generate short practice scenarios for ethics discussions, and then edited the language to ensure fairness and accuracy before handing it out to students.',
                    notAllowed: 'Dr Tim utilized unaltered notes generated by AI as his self directed education, but it was filled with factual inaccuracies and biased examples.'
                  },
                  level: 3,
                  x: 0,
                  y: 0,
                }
              ]
            }
          ]
        },
        {
          id: 'assignment-design',
          title: 'Assignment Design',
          description: 'Guidelines for designing AI-resistant assignments and using AI in assessment design.',
          level: 1,
          x: 0,
          y: 0,
          children: [
            {
              id: 'defining-boundaries',
              title: 'Defining Boundaries on AI Use',
              description: 'Course coordinators must define how AI may be used by students in the course or assessment outline. It should be clear on what students can do and what they can\'t do. Students must be provided with information on how to properly cite their use of AI as well.',
              scenario: {
                allowed: 'Dr Chen provided a course guide which made it clear that students can use AI for proofreading, but not for composing entire sections of text. Furthermore, he provided an example for acknowledging AI support.',
                notAllowed: 'Dr Tim\'s course outline was unclear due to the absence of a clear explanation for how AI would be used, leading to inconsistent usage across student submissions.'
              },
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'designing-tasks-ai-cannot-complete',
              title: 'Designing Tasks AI Cannot Complete',
              description: 'Educators are encouraged to write \'AI resistant\' assignments. This is to avoid assignment design that is easily completed by AI. Educators can even use AI to test an assignment\'s integrity so it can properly measure students\' learning outcomes. Educators may also include a requirement of students, if they use AI in their assignment, to discuss their perspectives and experience using it.',
              scenario: {
                allowed: 'Dr Chen designed a task that requires students to create \'a prototype and then reflect on the creative process as it unfolds\', in order to ensure this is not just AI work but an actual reflection.',
                notAllowed: 'Dr Tim utilized ChatGPT to generate essays with standardized questions that were easily answerable without any critical thinking elements, leading to consistent AI generated submissions.'
              },
              level: 2,
              x: 0,
              y: 0,
            },
            {
              id: 'using-ai-assist-assessment-design',
              title: 'Using AI to Assist in Assessment Design',
              description: 'Educators can use AI to help assist in assignment design. However, each output must be reviewed and edited to maintain human oversight of the language and quality of the assignment. For example, educators could use AI to generate assignment rubrics, audio/video transcripts, alt text for images, etc. Educators must be clear and transparent that they have used AI in their assignment design and explain how it has been used.',
              scenario: {
                allowed: 'Dr Chen created rubric criteria for the paper using generative AI and then adjusted them to ensure fairness and clarity. Her paper indicated that AI was utilized for administrative purposes.',
                notAllowed: 'Dr Tim used ChatGPT to generate rubrics and feedback comments without editing or review, leading to inconsistent and inaccurate grading criteria.'
              },
              level: 2,
              x: 0,
              y: 0,
            }
          ]
        }
      ]
    }
  ]

  return (
    <div className="relative">
      {/* Visualization Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
          <div className="flex">
            <button
              onClick={() => setVisualizationType('mindmap')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors duration-200 ${
                visualizationType === 'mindmap'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Mind Map
            </button>
            <button
              onClick={() => setVisualizationType('documentation')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors duration-200 ${
                visualizationType === 'documentation'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {visualizationType === 'mindmap' ? (
        <MindMap nodes={teacherNodes} />
      ) : (
        <DocumentationLayout nodes={teacherNodes} />
      )}
    </div>
  )
}

export default TeacherPage
