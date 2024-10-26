class SupportHandler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
    }

    handleRequest(issue) {
        if (this.nextHandler != null) {
            this.nextHandler.handleRequest(issue);
        }
    }
}


class GeneralSupportHandler extends SupportHandler {
    handleRequest(issue) {
        if (issue.type == 'general') {
            console.log('General Support Handling issue');
        } else {
            super.handleRequest(issue);
        }
    }
}

class TechnicalSupportHandler extends SupportHandler {
    handleRequest(issue) {
        if (issue.type == 'technical') {
            console.log('Technical Support Handling issue');
        } else {
            super.handleRequest(issue);
        }
    }
}


class CiriticalSuppotHandler extends SupportHandler {
    handleRequest(issue) {
        if (issue.type == 'critical') {
            console.log('Critical Support Handling issue');
        } else {
            super.handleRequest(issue);
        }
    }
}


const generalHandler = new GeneralSupportHandler();
const technicalHandler = new TechnicalSupportHandler();
const criticalHandler = new CiriticalSuppotHandler();


generalHandler.setNext(technicalHandler);
technicalHandler.setNext(criticalHandler);


const issue1 = { type: 'general' };
const issue2 = { type: 'technical' };
const issue3 = { type: `critical` };


generalHandler.handleRequest(issue1);
generalHandler.handleRequest(issue2);
generalHandler.handleRequest(issue3);




