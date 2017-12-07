import { getCurrentUser, setCurrentUser } from 'girder/auth';
import events from 'girder/events';
import UserModel from 'girder/models/UserModel';
import { restRequest } from 'girder/rest';
import LoginView from 'girder/views/layout/LoginView';

$('#login').click(function () {
    var loginView = new LoginView({
        el: $('#dialog-container'),
        parentView:this   //View created with no parentView property set. This view may not be garbage collected.
    });
    loginView.render();
});