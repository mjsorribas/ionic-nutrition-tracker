angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }
    })

    .controller('RecipesCtrl', function($scope, $stateParams, Recipes) {
        $scope.recipes = Recipes.all();
        $scope.remove = function(recipe) {
            Recipes.remove(recipe);
        }
    })

    .controller('RecipeDetailCtrl', function($scope, $stateParams, Recipes) {
        $scope.recipe = Recipes.get($stateParams.recipeId);
        console.log($scope.recipe);
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendsCtrl', function($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
