import {
  Bot,
  BrainCircuit,
  Database,
  FileText,
  MessageSquare,
  Search,
  Sparkles,
  User,
} from "lucide-react";

export const EnterpriseChatbotWorkflow = () => {
  return (
    <div className="enterprise-workflow">
      <div className="enterprise-workflow-header">
        <div>
          <h4>Enterprise GenAI Chatbot</h4>
          <p>RAG-powered conversational AI workflow</p>
        </div>

        <Sparkles size={20} />
      </div>

      <div className="enterprise-workflow-flow">

        {/* 1. User */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <User size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>User</strong>
            <span>Query / Conversation</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* 2. Enterprise AI Chatbot */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <MessageSquare size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>Enterprise AI Chatbot</strong>
            <span>Conversation Handling</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* 3. Query Processing */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <BrainCircuit size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>Query Processing</strong>
            <span>Intent &amp; Context</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* 4. RAG Pipeline */}
        <div className="enterprise-node enterprise-node-highlight">
          <div className="enterprise-node-icon">
            <Search size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>RAG Pipeline</strong>
            <span>Context Retrieval</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* 5. Enterprise Knowledge Base */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <Database size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>Enterprise Knowledge Base</strong>
            <span>Documents / Policies / Data</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* 6. LLM */}
        <div className="enterprise-node enterprise-node-highlight">
          <div className="enterprise-node-icon">
            <BrainCircuit size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>LLM</strong>
            <span>Response Generation</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* 7. AI Response */}
        <div className="enterprise-node enterprise-node-success">
          <div className="enterprise-node-icon">
            <Bot size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>AI Response</strong>
            <span>Context-Aware Answer</span>
          </div>
        </div>

      </div>
    </div>
  );
};
