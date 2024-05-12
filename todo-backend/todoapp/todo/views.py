from django.shortcuts import render
from django.http import JsonResponse
from .models import Todo
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.



def List(request):
   member= list(Todo.objects.all().values())
 
   return JsonResponse({"data":member})

@csrf_exempt
def Addlist(request):
    if request.method == 'POST':
        received_data = json.loads(request.body.decode('utf-8'))
        data = received_data.get('dat')
        dat=Todo(list=data)
        dat.save()
        return JsonResponse({'message':"todo submited succesfully"})
    else:
        return JsonResponse({'error':'error'})


@csrf_exempt
def Delete(request,id):
    todo=Todo.objects.get(id=id)
    todo.delete()
    return JsonResponse({'message':'delted'})

@csrf_exempt
def Update(request,id):
    try:
        
        todo=Todo.objects.get(id=id)
        data=json.loads(request.body.decode('utf-8'))
        todo.list= data.get('dat')
        todo.save()
        return JsonResponse({"message":"Success fully updated"})
    except Exception as e:
        return JsonResponse({'error':str(e)},status=400)