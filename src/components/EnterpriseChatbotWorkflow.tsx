import {
  Bot,
  BrainCircuit,
  Database,
  FileText,
  MessageSquare,
  Search,
  Server,
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

        {/* User */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <User size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>User</strong>
            <span>Query</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* API */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <Server size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>Python / FastAPI</strong>
            <span>REST API</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* Chatbot */}
        <div className="enterprise-node">
          <div className="enterprise-node-icon">
            <MessageSquare size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>AI Chatbot</strong>
            <span>Query Processing</span>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* RAG */}
        <div className="enterprise-node enterprise-node-highlight">
          <div className="enterprise-node-icon">
            <Search size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>RAG Pipeline</strong>
            <span>Context Retrieval</span>
          </div>
        </div>

        {/* Knowledge branch */}
        <div className="enterprise-rag-branch">

          <div className="enterprise-branch-line" />

          <div className="enterprise-node enterprise-node-small">
            <div className="enterprise-node-icon">
              <FileText size={16} />
            </div>

            <div className="enterprise-node-content">
              <strong>Enterprise Data</strong>
              <span>Documents / Knowledge</span>
            </div>
          </div>

          <div className="enterprise-arrow">↓</div>

          <div className="enterprise-node enterprise-node-small">
            <div className="enterprise-node-icon">
              <Database size={16} />
            </div>

            <div className="enterprise-node-content">
              <strong>Vector Database</strong>
              <span>Embeddings / Search</span>
            </div>
          </div>
        </div>

        <div className="enterprise-arrow">↓</div>

        {/* LLM */}
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

        {/* Response */}
        <div className="enterprise-node enterprise-node-success">
          <div className="enterprise-node-icon">
            <Bot size={17} />
          </div>

          <div className="enterprise-node-content">
            <strong>AI Response</strong>
            <span>Context-aware Answer</span>
          </div>
        </div>

      </div>
    </div>
  );
};
