
import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { mockCertifications } from '../services/mockDataService';
import { Certification } from '../types';
import { AcademicCapIcon, BookmarkIcon } from '../constants';

// Simplified form for adding external course
const AddExternalCourseForm: React.FC<{ onAdd: (cert: Certification) => void; onCancel: () => void }> = ({ onAdd, onCancel }) => {
  const [courseName, setCourseName] = useState('');
  const [institution, setInstitution] = useState('');
  const [issueDate, setIssueDate] = useState('');
  // const [certificateFile, setCertificateFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseName || !institution || !issueDate) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    const newCert: Certification = {
      id: `ext-${Date.now()}`,
      courseName,
      institution,
      issueDate,
      certificateUrl: "#placeholder", // Real app would handle file upload
      validated: false, // Needs validation
    };
    onAdd(newCert);
  };

  return (
    <Card title="Adicionar Curso Externo" className="mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-textSecondary">Nome do Curso*</label>
          <input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
        </div>
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-textSecondary">Instituição*</label>
          <input type="text" id="institution" value={institution} onChange={(e) => setInstitution(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
        </div>
        <div>
          <label htmlFor="issueDate" className="block text-sm font-medium text-textSecondary">Data de Conclusão*</label>
          <input type="date" id="issueDate" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
        </div>
        <div>
          <label htmlFor="certificateFile" className="block text-sm font-medium text-textSecondary">Upload do Certificado (PDF, JPG, PNG)</label>
          <input type="file" id="certificateFile" accept=".pdf,.jpg,.jpeg,.png" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-primary hover:file:bg-primary/20" />
        </div>
        <div className="flex justify-end space-x-3">
          <Button type="button" variant="ghost" onClick={onCancel}>Cancelar</Button>
          <Button type="submit" variant="primary">Adicionar e Enviar para Validação</Button>
        </div>
      </form>
    </Card>
  );
};


const CertificationItem: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="p-4 border border-gray-200 rounded-lg mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-md transition-shadow">
    <div>
      <h3 className="text-lg font-semibold text-primary">{cert.courseName}</h3>
      <p className="text-sm text-textSecondary">Instituição: {cert.institution}</p>
      <p className="text-sm text-textSecondary">Data de Conclusão: {new Date(cert.issueDate).toLocaleDateString('pt-BR')}</p>
    </div>
    <div className="mt-3 sm:mt-0 flex flex-col sm:items-end space-y-2">
       <span className={`text-xs px-3 py-1 rounded-full font-medium ${cert.validated ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
        {cert.validated ? 'Validado' : 'Pendente Validação'}
      </span>
      {cert.certificateUrl && (
         <Button variant="outline" size="sm" onClick={() => window.open(cert.certificateUrl, '_blank')} leftIcon={<AcademicCapIcon className="w-4 h-4"/>}>
          Ver Certificado
        </Button>
      )}
    </div>
  </div>
);

const LearningHistoryPage: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [certifications, setCertifications] = useState<Certification[]>(mockCertifications);

  const handleAddCertification = (newCert: Certification) => {
    setCertifications(prev => [newCert, ...prev]);
    setShowAddForm(false);
    // In a real app, this would also trigger an API call
    alert(`Curso "${newCert.courseName}" adicionado e enviado para validação.`);
  };
  
  return (
    <PageWrapper title="Meu Histórico de Aprendizagem" actions={
      <Button onClick={() => setShowAddForm(true)} variant="primary" leftIcon={<BookmarkIcon className="w-5 h-5"/>}>
        Adicionar Curso Externo
      </Button>
    }>
      {showAddForm && <AddExternalCourseForm onAdd={handleAddCertification} onCancel={() => setShowAddForm(false)} />}

      <Card className="mt-6">
        {certifications.length > 0 ? (
          certifications.map(cert => <CertificationItem key={cert.id} cert={cert} />)
        ) : (
          <p className="text-textSecondary text-center py-8">Nenhum curso ou certificação registrada ainda.</p>
        )}
      </Card>
    </PageWrapper>
  );
};

export default LearningHistoryPage;
    