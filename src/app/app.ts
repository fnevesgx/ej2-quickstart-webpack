import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '390px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' });

documenteditor.appendTo('#DocumentEditor');